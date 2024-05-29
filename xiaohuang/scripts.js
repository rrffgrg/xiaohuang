document.addEventListener('DOMContentLoaded', () => {
    // 平滑滚动功能
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }

    // 表单验证功能
    const form = document.querySelector('form');
    form.addEventListener('submit', validateForm);

    function validateForm(event) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        let isValid = true;

        if (!name) {
            alert('姓名不能为空');
            isValid = false;
        }
        if (!email) {
            alert('电子邮件不能为空');
            isValid = false;
        }
        if (!message) {
            alert('留言不能为空');
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
        }
    }

    // 图片滑动效果
    const gallery = document.querySelector('.gallery');
    const images = gallery.querySelectorAll('img');
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    document.querySelector('.next').addEventListener('click', nextImage);
    document.querySelector('.prev').addEventListener('click', prevImage);

    showImage(currentIndex);
});
