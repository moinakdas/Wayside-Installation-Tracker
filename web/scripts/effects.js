window.onload = function() {
    const canvas = document.getElementById('canvas');
    const ctx = canvas.getContext('2d');

    let image = new Image();
    image.src = 'images/map_graphics/basemap.svg';

    let scale = 1;
    let offsetX = 0;
    let offsetY = 0;

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(image, offsetX, offsetY, image.width * scale, image.height * scale);
    }

    function handleScroll(event) {
        event.preventDefault();
        const delta = event.deltaY * -0.01;
        const oldScale = scale;
        scale = Math.max(Math.min(Math.max(0.1, scale + delta), 10), Math.max(window.innerHeight/1000,window.innerWidth/1900));
        const mousePositionX = event.clientX - canvas.getBoundingClientRect().left;
        const mousePositionY = event.clientY - canvas.getBoundingClientRect().top;
        //offsetX -= (mousePositionX * (scale - oldScale));
        //offsetY -= (mousePositionY * (scale - oldScale));
        const newOffsetX = offsetX - (mousePositionX * (scale - oldScale));
        const newOffsetY = offsetY - (mousePositionY * (scale - oldScale));
        const maxOffsetX = Math.min(0, canvas.width - image.width * scale);
        const maxOffsetY = Math.min(0, canvas.height - image.height * scale);
        offsetX = Math.max(Math.min(newOffsetX, 0), maxOffsetX);
        offsetY = Math.max(Math.min(newOffsetY, 0), maxOffsetY);
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
            const maxOffsetX = Math.min(0, canvas.width - image.width * scale);
            const maxOffsetY = Math.min(0, canvas.height - image.height * scale);

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

    image.onload = function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    };

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        draw();
    });
};