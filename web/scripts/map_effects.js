window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let basemapImage = new Image();
    basemapImage.src = 'images/map_graphics/basemap.svg';

    let crosstownLinePathData = 'M104.565 792.536V780.892C104.565 777.377 104.565 775.62 104.869 \
    773.986C105.55 770.331 107.346 766.976 110.01 764.383C111.201 763.223 112.664 762.249 115.589 \
    760.3V760.3C118.514 758.351 119.976 757.377 121.167 756.218C123.832 753.625 125.628 750.27 \
    126.308 746.615C126.613 744.981 126.613 743.223 126.613 739.709V717.703C126.613 714.107 126.613 \
    712.31 126.292 710.632C125.647 707.265 124.053 704.151 121.699 701.658C120.526 700.417 119.068 \
    699.365 116.152 697.262L113.857 695.607C108.648 691.851 106.043 689.973 104.39 687.759C101.05 \
    683.285 99.9747 677.515 101.479 672.139C102.224 669.477 103.978 666.787 107.484 661.407L112.956 \
    653.012C113.838 651.658 114.279 650.982 114.611 650.376C118.745 642.825 116.954 633.404 110.337 \
    627.897C109.807 627.455 109.148 626.988 107.831 626.052V626.052L75.5325 602.577C74.4985 601.825 \
    73.9814 601.449 73.4429 601.113C72.3651 600.44 71.2192 599.884 70.0242 599.452C69.4271 599.237 \
    68.8121 599.063 67.5822 598.714L51.9235 594.28C50.6368 593.916 49.9935 593.734 49.3699 \
    593.506C48.1219 593.051 46.9282 592.46 45.8105 591.742C45.252 591.383 44.7175 590.982 43.6485 \
    590.178L11.2448 565.823C7.60108 563.084 5.77921 561.715 4.4345 560.098C1.72971 556.844 0.25725 \
    552.743 0.275596 548.512C0.284716 546.409 0.819791 544.193 1.88994 539.762L2.92631 535.471C3.15155 \
    534.539 3.26417 534.073 3.40085 533.615C3.6743 532.699 4.02029 531.806 4.43556 530.945C4.64313 \
    530.514 4.87412 530.094 5.33609 529.253L49.3153 449.209C50.5466 446.968 51.1622 445.847 51.9561 \
    445.095C53.5602 443.575 55.7876 442.902 57.9649 443.279C59.0425 443.466 60.1757 444.058 62.442 \
    445.242L71.9013 450.184L89.694 458.416C90.9053 458.976 91.511 459.257 92.1312 459.49C93.3721 \
    459.957 94.6608 460.285 95.9739 460.469C96.63 460.56 97.296 460.604 98.6279 460.691L116.363 \
    461.854C117.074 461.9 117.43 461.924 117.786 461.933C118.497 461.951 119.208 461.927 119.917 \
    461.862C120.271 461.829 120.624 461.782 121.331 461.688L265.219 442.565C267.131 442.311 268.087 \
    442.184 269.008 441.962C271.11 441.453 273.104 440.57 274.893 439.354C275.676 438.822 276.413 \
    438.199 277.885 436.954V436.954C280.613 434.647 281.978 433.493 283.039 432.187C285.473 429.191 \
    286.879 425.493 287.051 421.638C287.126 419.956 286.873 418.187 286.368 414.65L277.527 \
    352.802C277.455 352.295 277.418 352.042 277.389 351.788C277.332 351.28 277.295 350.77 \
    277.281 350.259C277.273 350.003 277.273 349.748 277.273 349.236V300.022L266.453 223.601C266.051 \
    220.765 265.85 219.347 265.868 217.962C265.905 215.184 266.583 212.452 267.851 209.981C268.483 \
    208.748 269.324 207.589 271.006 205.271L274.472 200.492C274.6 200.316 274.664 200.228 274.726 \
    200.14C276.11 198.183 277.09 195.97 277.607 193.63C277.63 193.524 277.652 193.418 277.697 \
    193.204V193.204C277.761 192.896 277.793 192.741 277.822 192.59C278.467 189.207 278.128 185.711 \
    276.846 182.516C276.788 182.373 276.727 182.228 276.605 181.937L272.374 171.895L255.628 \
    137.694C255.048 136.511 254.758 135.919 254.514 135.313C254.025 134.098 253.671 132.834 253.456 \
    131.543C253.349 130.898 253.288 130.242 253.167 128.93L246.79 59.8864C246.634 58.2053 246.557 57.3648 \
    246.557 56.5304C246.558 54.8602 246.791 53.1983 247.251 51.5924C247.48 50.7902 247.786 50.0036 248.398 \
    48.4303L249.728 45.0139C250.361 43.3854 250.678 42.5712 251.067 41.8006C251.844 40.258 252.84 38.8354 \
    254.023 37.5765C254.614 36.9477 255.27 36.3711 256.583 35.218L263.436 29.1995C264.006 28.699 264.291 \
    28.4487 264.585 28.2112C265.174 27.736 265.793 27.2985 266.437 26.9013C266.759 26.7027 267.09 26.5174 \
    267.752 26.1468L312.795 0.922363'

    let scale = 1;
    let offsetX = 0;
    let offsetY = 0;

    //Initialize station objects for listeners
    let churchAvenue;
    let CHU_FOR;
    let fortHamiltonPkwy;
    let FOR_15S;
    let ProspectPark; // 15th street prospect park
    let PRO_7AV; //15S-7AV
    let seventhAve;
    let SEV_4TH; //7AV-4TH
    let fourthNinthSt; //4th & 9th street
    let FOU_SMI;
    let smith9thSt;
    let SMI_CAR;
    let carrollSt;
    let CAR_BER;
    let bergenSt;
    let BER_HOY;
    let hoytSchermerhorn;
    let HOY_FUL;
    let fultonStreet;
    let FUL_CLI;
    let clintonWashingtonAve;
    let CLI_CLA;
    let classonAve;
    let CLA_BED;
    let bedfordNostrandAve;
    let BED_MYR;
    let myrtleWilloughbyAve;
    let MYR_FLU;
    let flushingAveStation;
    let FLU_BRO;
    let broadway;
    let BRO_MET;
    let metropolitanAvenue;
    let MET_NAS;
    let nassauAvenue;
    let NAS_GRE;
    let greenpointAve;
    let GRE_21S;
    let twentyFirstStStation; //21 St Station
    let TWE_COU; //21S-COU
    let courtSquare;
    let COU_QUE;
    let queensPlaza;

    //let x and y be values from 0 to 1
    // 0 = left edge of basemap, 1 = right edge of basemap
    function strokePathAtCoordinates(ctx, path, x, y) {
        ctx.save(); // Save the current state of the context
        ctx.translate(offsetX + (basemapImage.width * scale)*x, offsetY + (basemapImage.height * scale)*y); // Move the origin to (x, y)
        ctx.stroke(path); // Stroke the path at the new origin
        ctx.restore(); // Restore the previous state of the context
    }

    function drawCircle(ctx, x, y, color) {
        let circlePath = new Path2D();
        radius = window.innerWidth * 0.008 + scale*0.01;
        circlePath.arc(offsetX + (basemapImage.width * scale)*x, offsetY + (basemapImage.height * scale)*y, radius, 0, Math.PI * 2);
        ctx.fillStyle = color;
        ctx.strokeStyle = '#FFFFFF'; // Set the border color to blue
        ctx.lineWidth = window.innerWidth * 0.001; // Set the border width
        ctx.fill(circlePath); // Fill the circle with the current fill style
        ctx.stroke(circlePath);
        return circlePath; // Return the Path2D object for later reference
    }

    function drawSquare(ctx, x, y, color) {
        size = window.innerWidth * 0.016 + scale*0.02;
        let squarePath = new Path2D();
        squarePath.rect(offsetX + (basemapImage.width * scale)*x - size/2, offsetY + (basemapImage.height * scale)*y - size/2, size, size);
        ctx.fillStyle = color;
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = window.innerWidth * 0.001;
        ctx.fill(squarePath); // Fill the square with the current fill style
        ctx.stroke(squarePath);
        return squarePath; // Return the Path2D object for later reference
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(basemapImage, offsetX, offsetY, basemapImage.width * scale, basemapImage.height * scale);
        
        //crosstownLinePath draw
        const scaledCrosstownLinePath = crosstownLinePathData.replace(
            /([-+]?\d*\.\d+|\d+)/g,
            match => match * scale * 1
        );
        const crosstownLine = new Path2D(scaledCrosstownLinePath);
        ctx.strokeStyle = 'white'; // Change to desired stroke color
        ctx.lineWidth = window.innerWidth * 0.003; // Adjust the scale factor as needed
        
        strokePathAtCoordinates(ctx, crosstownLine, 0.406, 0.09) //draw crosstown Line Path
        
        //EVERY. SINGLE. STATION.
        churchAvenue = drawCircle(ctx, 0.4605, 0.824, "#2AA317");
        fortHamiltonPkwy = drawCircle(ctx,0.47195, 0.77, "#2AA317");
        ProspectPark = drawCircle(ctx,0.461, 0.705, "#2AA317");
        seventhAve = drawCircle(ctx,0.456, 0.6616, "#2AA317");
        fourthNinthSt = drawCircle(ctx,0.43, 0.638, "#2AA317");
        smith9thSt = drawCircle(ctx,0.41, 0.6115, "#2AA317");
        carrollSt = drawCircle(ctx,0.4135, 0.565, "#2AA317");
        bergenSt = drawCircle(ctx,0.4274, 0.52, "#2AA317");
        hoytSchermerhorn = drawCircle(ctx,0.44685226906829234, 0.509638583272769, "#2AA317");
        clintonWashingtonAve = drawCircle(ctx,0.477072007865878, 0.5155092312581219, "#2AA317");
        fultonStreet = drawCircle(ctx,0.5067579253020132, 0.5084055499478555, "#2AA317"); // I love TCE
        classonAve = drawCircle(ctx,0.5337708632940297, 0.5021698393240124, "#2AA317");
        bedfordNostrandAve = drawCircle(ctx,0.5540809704924948, 0.4627643005937757, "#2AA317");
        myrtleWilloughbyAve = drawCircle(ctx,0.5510600799886568, 0.42366909843101247, "#2AA317");
        flushingAveStation = drawCircle(ctx,0.5503232495978614, 0.3821582773567048, "#2AA317");
        broadway = drawCircle(ctx,0.5476359562620028, 0.33274281608682654, "#2AA317");
        metropolitanAvenue = drawCircle(ctx,0.5480436606063197, 0.2504877611036734, "#2AA317");
        nassauAvenue = drawCircle(ctx,0.5375219517562342, 0.20603025615787235, "#2AA317");
        greenpointAve = drawCircle(ctx,0.534795900257654, 0.1521445385094818, "#2AA317");
        twentyFirstStStation = drawCircle(ctx,0.5489780978293515, 0.1106850951575837, "#2AA317");
        courtSquare = drawCircle(ctx,0.5687257996856262, 0.0907398055017195, "#2AA317");

        //man I should have billed more for this
        CHU_FOR = drawSquare(ctx,0.46491876904881685, 0.7956096815179841,"red");
        FOR_15S = drawSquare(ctx,0.46262310606060597, 0.7304966329966331,"red");
        PRO_7AV = drawSquare(ctx,0.4666761363636365, 0.6819528619528616,"red");
        SEV_4TH = drawSquare(ctx,0.4439107784375409, 0.6462633589804304,"red");
        FOU_SMI = drawSquare(ctx,0.4192540759716212, 0.6238145286373771,"red");
        SMI_CAR = drawSquare(ctx,0.40684346887084366, 0.5906400083650937,"red");
        CAR_BER = drawSquare(ctx,0.4206486742424242, 0.5413215488215486,"red");
        BER_HOY = drawSquare(ctx,0.4345785982732891, 0.5005415269090395,"red");
        HOY_FUL = drawSquare(ctx,0.46314867424242434, 0.5171632996632995,"red");
        FUL_CLI = drawSquare(ctx,0.49281063840626643, 0.5118752128418604,"red");
        CLI_CLA = drawSquare(ctx,0.5212310606060606, 0.5051262626262628,"red");
        CLA_BED = drawSquare(ctx,0.5518268737289064, 0.4927547166001567,"red");
        BED_MYR = drawSquare(ctx,0.5527888257575756, 0.4448653198653199,"red");
        MYR_FLU = drawSquare(ctx,0.5503361742424241, 0.4011952861952862,"red");
        FLU_BRO = drawSquare(ctx,0.5498542902635165, 0.3611496197060289,"red");
        BRO_MET = drawSquare(ctx,0.5446458401866103, 0.2882566706042146,"red");
        MET_NAS = drawSquare(ctx,0.5427119630064774, 0.23068039318498396,"red");
        NAS_GRE = drawSquare(ctx,0.5363837890255512, 0.18193551226217716,"red");
        GRE_21S = drawSquare(ctx,0.537492645776942, 0.12633570060956173,"red");
        TWE_COU = drawSquare(ctx,0.5594223484848484, 0.10027777777777777,"red");
    }

    function handleScroll(event) {
        event.preventDefault();
        const delta = event.deltaY * -0.01;
        const oldScale = scale;
        scale = Math.max(Math.min(Math.max(0.1, scale + delta), 10), Math.max(window.innerHeight/1080,window.innerWidth/1900));
        // Get the mouse position relative to the canvas
        const canvasMouseX = event.clientX - canvas.getBoundingClientRect().left;
        const canvasMouseY = event.clientY - canvas.getBoundingClientRect().top;

        // Calculate the mouse position relative to the scaled image
        const imageMouseX = canvasMouseX / oldScale - offsetX / oldScale;
        const imageMouseY = canvasMouseY / oldScale - offsetY / oldScale;
        offsetX = -(imageMouseX * scale - canvasMouseX);
        offsetY = -(imageMouseY * scale - canvasMouseY);
        // Apply constraints to the offsets
        const maxOffsetX = Math.min(0, canvas.width - basemapImage.width * scale);
        const maxOffsetY = Math.min(0, canvas.height - basemapImage.height * scale);
        offsetX = Math.max(Math.min(offsetX, 0), maxOffsetX);
        offsetY = Math.max(Math.min(offsetY, 0), maxOffsetY);
        draw();
    }

    function handleMouseDown(event) {
        const startX = event.clientX;
        const startY = event.clientY;
        const startOffsetX = offsetX;
        const startOffsetY = offsetY;
    
        function handleMouseMove(event) {
            const deltaX = event.clientX - startX;
            const deltaY = event.clientY - startY;
            const newOffsetX = startOffsetX + deltaX;
            const newOffsetY = startOffsetY + deltaY;

            // Calculate the maximum allowed offset based on the current scale
            const maxOffsetX = Math.min(0, canvas.width - basemapImage.width * scale);
            const maxOffsetY = Math.min(0, canvas.height - basemapImage.height * scale);

            // Apply the constraints to the new offset values
            offsetX = Math.max(Math.min(newOffsetX, 0), maxOffsetX);
            offsetY = Math.max(Math.min(newOffsetY, 0), maxOffsetY);

            draw();
        }
    
        function handleMouseUp() {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        }
    
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    }

    canvas.addEventListener('wheel', handleScroll);
    canvas.addEventListener('mousedown', handleMouseDown);

    basemapImage.onload = function() {
        // Calculate initial offsets based on image size and canvas size
        const initialOffsetX = (canvas.width - basemapImage.width * scale) / 2;
        const initialOffsetY = (canvas.height - basemapImage.height * scale) / 2;
        
        offsetX = Math.max(Math.min(offsetX, 0), initialOffsetX);
        offsetY = Math.max(Math.min(offsetY, 0), initialOffsetY);
        scale = 1.1
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    };

    window.addEventListener('resize', function() {
        const oldCanvasWidth = canvas.width;
        const oldCanvasHeight = canvas.height;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        offsetX += (canvas.width - oldCanvasWidth) / 2;
        offsetY += (canvas.height - oldCanvasHeight) / 2;

        const maxOffsetX = Math.min(0, canvas.width - basemapImage.width * scale);
        const maxOffsetY = Math.min(0, canvas.height - basemapImage.height * scale);

        offsetX = Math.max(Math.min(offsetX, 0), maxOffsetX);
        offsetY = Math.max(Math.min(offsetY, 0), maxOffsetY);

        draw();
    });
    /*
    canvas.addEventListener('click', function(event) {
        let rect = canvas.getBoundingClientRect();
        let mouseX = (event.clientX - offsetX)/(basemapImage.width * scale);
        let mouseY = (event.clientY - offsetY)/(basemapImage.height * scale);
        console.log(`drawSquare(ctx,${mouseX}, ${mouseY},"red")`);
    });*/

    canvas.addEventListener('click', function(event) {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
    
        // Check if the click is inside any shape
        switch (true) {
            // Circle cases
            case ctx.isPointInPath(churchAvenue, x, y):
                setOverallProgress("CHURCH");
                break;
            case ctx.isPointInPath(fortHamiltonPkwy, x, y):
                setOverallProgress("FORT HAMILTON");
                break;
            case ctx.isPointInPath(ProspectPark, x, y):
                setOverallProgress("15TH STREET PROSPECT PARK");
                break;
            case ctx.isPointInPath(seventhAve, x, y):
                setOverallProgress("7TH AVENUE");
                break;
            case ctx.isPointInPath(fourthNinthSt, x, y):
                setOverallProgress("4 9TH STREET");
                break;
            case ctx.isPointInPath(smith9thSt, x, y):
                setOverallProgress("SMITH & 9TH STREET");
                break;
            case ctx.isPointInPath(carrollSt, x, y):
                setOverallProgress("CARROLL");
                break;
            case ctx.isPointInPath(bergenSt, x, y):
                setOverallProgress("BERGEN ST");
                break;
            case ctx.isPointInPath(hoytSchermerhorn, x, y):
                setOverallProgress("HOYT SCHERMERHORN");
                break;
            case ctx.isPointInPath(clintonWashingtonAve, x, y):
                setOverallProgress("CLINTON-WASHINGTON");
                break;
            case ctx.isPointInPath(fultonStreet, x, y):
                setOverallProgress("FULTON");
                break;
            case ctx.isPointInPath(classonAve, x, y):
                setOverallProgress("CLASSON");
                break;
            case ctx.isPointInPath(bedfordNostrandAve, x, y):
                setOverallProgress("BEDFORD NOSTRAND");
                break;
            case ctx.isPointInPath(myrtleWilloughbyAve, x, y):
                setOverallProgress("MYRTLE AVE");
                break;
            case ctx.isPointInPath(flushingAveStation, x, y):
                setOverallProgress("FLUSHING");
                break;
            case ctx.isPointInPath(broadway, x, y):
                setOverallProgress("BROADWAY");
                break;
            case ctx.isPointInPath(metropolitanAvenue, x, y):
                setOverallProgress("METROPOLITAN");
                break;
            case ctx.isPointInPath(nassauAvenue, x, y):
                setOverallProgress("NASSAU");
                break;
            case ctx.isPointInPath(greenpointAve, x, y):
                setOverallProgress("GREENPOINT");
                break;
            case ctx.isPointInPath(twentyFirstStStation, x, y):
                setOverallProgress("21ST STATION");
                break;
            case ctx.isPointInPath(courtSquare, x, y):
                setOverallProgress("COURT SQ");
                break;
    
            // Square cases
            case ctx.isPointInPath(CHU_FOR, x, y):
                setOverallProgress("CHU-FOR");
                break;
            case ctx.isPointInPath(FOR_15S, x, y):
                setOverallProgress("FOR-15S");
                break;
            case ctx.isPointInPath(PRO_7AV, x, y):
                setOverallProgress("15S-7AV");
                break;
            case ctx.isPointInPath(SEV_4TH, x, y):
                setOverallProgress("7AV-4TH");
                break;
            case ctx.isPointInPath(FOU_SMI, x, y):
                setOverallProgress("4TH-SMI");
                break;
            case ctx.isPointInPath(SMI_CAR, x, y):
                setOverallProgress("SMI-CAR");
                break;
            case ctx.isPointInPath(CAR_BER, x, y):
                setOverallProgress("CAR-BER");
                break;
            case ctx.isPointInPath(BER_HOY, x, y):
                setOverallProgress("BER-HOY");
                break;
            case ctx.isPointInPath(HOY_FUL, x, y):
                setOverallProgress("HOY-FUL");
                break;
            case ctx.isPointInPath(FUL_CLI, x, y):
                setOverallProgress("FUL-CLI");
                break;
            case ctx.isPointInPath(CLI_CLA, x, y):
                setOverallProgress("CLI-CLA");
                break;
            case ctx.isPointInPath(CLA_BED, x, y):
                setOverallProgress("CLA-BED");
                break;
            case ctx.isPointInPath(BED_MYR, x, y):
                setOverallProgress("BED-MYR");
                break;
            case ctx.isPointInPath(MYR_FLU, x, y):
                setOverallProgress("MYR-FLU");
                break;
            case ctx.isPointInPath(FLU_BRO, x, y):
                setOverallProgress("FLU-BRO");
                break;
            case ctx.isPointInPath(BRO_MET, x, y):
                setOverallProgress("BRO-MET");
                break;
            case ctx.isPointInPath(MET_NAS, x, y):
                setOverallProgress("MET-NAS");
                break;
            case ctx.isPointInPath(NAS_GRE, x, y):
                setOverallProgress("NAS-GRE");
                break;
            case ctx.isPointInPath(GRE_21S, x, y):
                setOverallProgress("GRE-21S");
                break;
            case ctx.isPointInPath(TWE_COU, x, y):
                setOverallProgress("21S-COU");
                break;
        }
    });
};