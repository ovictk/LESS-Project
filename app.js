var darkmode = true
$(document).ready(function () {
  if (darkmode) {
    $('body').addClass('darkmode')
  }
  $(document).on('click', '#toggleDarktheme', function () {
    toggleDarktheme()
  })
  $(document).on('click', '#dropper', function () {
    $('.drop').toggleClass('openDropper')
    dropCloseOpen() 
  })
  $(document).on('keyup', '.req', function () {
    requiredToggler($(this))
  })
  $(document).on('keyup', '.reqbg', function () {
    requiredTogglerbg($(this))
  })
  $(document).on('keyup', '.reqsvg', function () {
    requiredInputSVG($(this))
  })
  $(document).on('keyup', '.reqsvgbg', function () {
    requiredInputSVGbg($(this))
  })
})

// FUNCTIONS
function requiredInputSVG ($object) {
  // $(document).on('keyup', '.reqsvg', function () {
  //   requiredInputSVG($(this))
  // })
  if ($($object).val() == '') {
    $($object.parent()).removeClass('reqsvgFilled')
    setTimeout( function () {
      $($object.parent()).addClass('reqsvgRequired')
    }, 50)
  } else {
    $($object.parent()).removeClass('reqsvgRequired')
    setTimeout( function () {
      $($object.parent()).addClass('reqsvgFilled')
    }, 50)
  }
}
function requiredInputSVGbg ($object) {
  // $(document).on('keyup', '.reqsvgbg', function () {
  //   requiredInputSVG($(this))
  // })
  if ($($object).val() == '') {
    $($object.parent()).removeClass('reqsvgFilledbg')
    setTimeout( function () {
      $($object.parent()).addClass('reqsvgRequiredbg')
    }, 50)
  } else {
    $($object.parent()).removeClass('reqsvgRequiredbg')
    setTimeout( function () {
      $($object.parent()).addClass('reqsvgFilledbg')
    }, 50)
  }
}
function requiredToggler ($object) {
  if ($($object).val() == '') {
    $($object).addClass('required')
    $($object).removeClass('filled')
  } else {
    $($object).removeClass('required')
    $($object).addClass('filled')
  }
}
function requiredTogglerbg ($object) {
  if ($($object).val() == '') {
    $($object).addClass('requiredbg')
    $($object).removeClass('filledbg')
  } else {
    $($object).removeClass('requiredbg')
    $($object).addClass('filledbg')
  }
}
function toggleDarktheme () {
  // $(document).on('click', '#toggleDarktheme', function () {
  //   toggleDarktheme()
  // })
  $('body').toggleClass('darkmode')
  if (darkmode) {
    darkmode = false
  } else {
    darkmode = true
  }
}
function dropCloseOpen() {
  // $(document).on('click', '#dropper', function () {
  //   $('.drop').toggleClass('openDropper')
  //   dropCloseOpen() 
  // })
  if ($('#dropped').hasClass('animateOut')) {
    $('#dropped').removeClass('animateOut')
    $('#dropped').addClass('animateIn')
  } else if ($('#dropped').hasClass('animateIn')) {
    $('#dropped').removeClass('animateIn')
    $('#dropped').addClass('animateOut')
  } else {
    $('#dropped').addClass('animateIn')
  }
}