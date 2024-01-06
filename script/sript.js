function closeBack(){
    var back = document.getElementById('back');
    if (back.style.display === 'none' || back.style.display === '') {
        back.style.display = 'block';
      } else {
        back.style.display = 'none';
    }
  }