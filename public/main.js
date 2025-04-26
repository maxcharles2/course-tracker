var thumbUp = document.getElementsByClassName("fa-thumbs-up");
var thumbDown = document.getElementsByClassName("fa-thumbs-down")
var trash = document.getElementsByClassName("fa-trash-o");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const userNameVal = this.parentNode.parentNode.childNodes[1].innerText
        const courseNameVal = this.parentNode.parentNode.childNodes[3].innerText
        const instructorNameVal = this.parentNode.parentNode.childNodes[5].innerText
        const courseLengthVal = this.parentNode.parentNode.childNodes[7].innerText
        const notesVal = this.parentNode.parentNode.childNodes[9].innerText
        const completionStatusVal = this.parentNode.parentNode.childNodes[11].innerText
        const thumbUpVal = parseInt(this.parentNode.parentNode.childNodes[13].innerText)
        fetch('upVote', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'userName': userNameVal,
            'courseName': courseNameVal,
            'instructorName': instructorNameVal,
            'courseLength': courseLengthVal,
            'notes': notesVal,
            'completionStatus': completionStatusVal,
            'thumbUp': thumbUpVal
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});

Array.from(thumbDown).forEach(function(element) {
  element.addEventListener('click', function(){
    const userNameVal = this.parentNode.parentNode.childNodes[1].innerText
    const courseNameVal = this.parentNode.parentNode.childNodes[3].innerText
    const instructorNameVal = this.parentNode.parentNode.childNodes[5].innerText
    const courseLengthVal = this.parentNode.parentNode.childNodes[7].innerText
    const notesVal = this.parentNode.parentNode.childNodes[9].innerText
    const completionStatusVal = this.parentNode.parentNode.childNodes[11].innerText
    const thumbUpVal = parseInt(this.parentNode.parentNode.childNodes[13].innerText)
    fetch('downVote', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'userName': userNameVal,
        'courseName': courseNameVal,
        'instructorName': instructorNameVal,
        'courseLength': courseLengthVal,
        'notes': notesVal,
        'completionStatus': completionStatusVal,
        'thumbUp': thumbUpVal
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true)
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const userNameVal = this.parentNode.parentNode.childNodes[1].innerText
        const courseNameVal = this.parentNode.parentNode.childNodes[3].innerText
        const instructorNameVal = this.parentNode.parentNode.childNodes[5].innerText
        const courseLengthVal = this.parentNode.parentNode.childNodes[7].innerText
        const notesVal = this.parentNode.parentNode.childNodes[9].innerText
        const completionStatusVal = this.parentNode.parentNode.childNodes[11].innerText
        const thumbUpVal = parseInt(this.parentNode.parentNode.childNodes[13].innerText)
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'userName': userNameVal,
            'courseName': courseNameVal,
            'instructorName': instructorNameVal,
            'courseLength': courseLengthVal,
            'notes': notesVal,
            'completionStatus': completionStatusVal,
            'thumbUp': thumbUpVal
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
