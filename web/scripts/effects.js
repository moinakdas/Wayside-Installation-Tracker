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
        scale = Math.max(Math.min(Math.max(0.1, scale + delta), 10), 1);
        const mousePositionX = event.clientX - canvas.getBoundingClientRect().left;
        const mousePositionY = event.clientY - canvas.getBoundingClientRect().top;
        offsetX -= (mousePositionX * (scale - oldScale));
        offsetY -= (mousePositionY * (scale - oldScale));
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
            offsetX = startOffsetX + deltaX;
            offsetY = startOffsetY + deltaY;
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