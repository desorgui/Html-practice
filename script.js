// const menuItem = document.querySelectorAll('.menu-item');

// menuItem.forEach(item => {
//   item.addEventListener('click', () => {
//     item.querySelector('.submenu').classList.toggle('show');
    // item.querySelector('i').classList.toggle('fa-caret-right');
    // item.querySelector('i').classList.toggle('fa-caret-down');
//     document.querySelector('.active').classList.remove('active');
//     item.querySelector('a').classList.remove('active');
//     item.querySelector('a').classList.add('active');
//   });
// });

const parentMenus = document.querySelectorAll('.menu-item');

// Add click event listener to each parent menu item
parentMenus.forEach(function(parentMenu) {
  parentMenu.addEventListener('click', function() {
    // Remove active class from all parent menus
    parentMenus.forEach(function(menu) {
      menu.classList.remove('active');
      menu.querySelector('.submenu').classList.remove('show');
      menu.querySelector('i').classList.remove('fa-caret-down');
      menu.querySelector('i').classList.add('fa-caret-right');
    });
    this.querySelector('i').classList.remove('fa-caret-right');
    this.querySelector('i').classList.add('fa-caret-down');
    // Add active class to clicked parent menu
    this.classList.add('active');
    this.querySelector('.submenu').classList.add('show');
  });
});
