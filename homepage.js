// انتظر حتى يتم تحميل المستند بالكامل
document.addEventListener("DOMContentLoaded", function() {
    // احضر قائمة جميع الصور في الصفحة
    const images = document.querySelectorAll('.product img');

    //    تطبيق التأثير عندما يتم تحويل المؤشر فوقها وعندما يتوقف تحويل المؤشر عنها
    images.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
            image.style.transition = 'transform 0.3s ease';
        });

        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
            image.style.transition = 'transform 0.3s ease';
        });
    });
});

function goToProduct(productID){
    localStorage.setItem("productID",productID);
}
