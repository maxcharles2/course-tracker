const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const thumbDown = document.getElementsByClassName("fa-thumbs-down")
const trash = document.getElementsByClassName("fa-trash-o");
const updateNotesBtn = document.getElementsByClassName("updateNotesBtn");
// const updateCompletionStatusBtn = document.getElementsByClassName("updateCompletionStatusBtn");
// this.parentNode.parentNode.parentNode.childNodes[7].innerText //targets Notes: (whatever text is there)
//this.parentNode.parentNode.parentNode.childNodes[13].childNodes[1].childNodes[1] (newNotesVal input tag)
// const editButtons = document.querySelectorAll('.updateNotesBtn');

// // Add event listener to each button
// editButtons.forEach(button => {
//   button.addEventListener('click', function() {
//     // Traverse DOM to find the total upvotes
//     const upvotes = this.parentNode.parentNode.parentNode.childNodes[13].childNodes[1].childNodes[1]
    
//     // Log the total upvotes to the console
//     console.log(upvotes);
//   });
// });

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const courseItem = this.closest('.courseItem');
        const userNameVal = courseItem.querySelector('.userName').innerText;
        const courseNameVal = courseItem.querySelector('.courseName').innerText;
        const instructorNameVal = courseItem.querySelector('.instructorName').innerText;
        const courseLengthVal = courseItem.querySelector('.courseLength').innerText;
        const notesVal = courseItem.querySelector('.notes').innerText;
        const completionStatusVal = courseItem.querySelector('.completionStatus').innerText;
        const thumbUpText = courseItem.querySelector('.thumbUp').innerText;
        const thumbUpVal = parseInt(thumbUpText.replace('Total upvotes: ','').trim());
        const courseId = courseItem.getAttribute('data-id') //stores id in data attribute
        fetch('upVote', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            '_id': courseId,
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
    const courseItem = this.closest('.courseItem');
    const userNameVal = courseItem.querySelector('.userName').innerText;
    const courseNameVal = courseItem.querySelector('.courseName').innerText;
    const instructorNameVal = courseItem.querySelector('.instructorName').innerText;
    const courseLengthVal = courseItem.querySelector('.courseLength').innerText;
    const notesVal = courseItem.querySelector('.notes').innerText;
    const completionStatusVal = courseItem.querySelector('.completionStatus').innerText;
    const thumbUpText = courseItem.querySelector('.thumbUp').innerText;
    const thumbUpVal = parseInt(thumbUpText.replace('Total upvotes: ','').trim());
    const courseId = courseItem.getAttribute('data-id') //stores id in data attribute
    fetch('downVote', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        '_id': courseId,
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

Array.from(updateNotesBtn).forEach(function(element) {
  element.addEventListener('click', function(){
    const courseItem = this.closest('.courseItem');
    // const courseId = courseItem.getAttribute('data-id') //stores id in data attribute
    const userNameText = courseItem.querySelector('.userName').innerText.replace('User: ', '');
    const userNameVal = userNameText.replace('User: ', '');
    // const notesVal = document.querySelector('.notes').innerText;
    const notesVal = document.querySelector('.notes').innerText;
    const newNotesVal = document.querySelector('.newNotesVal').value;
    console.log("this is the innerText", newNotesVal, "this is the original notes value", notesVal, "this is the element", document.querySelector('.newNotesVal'))
    
    fetch('newNotes', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        // '_id': courseId,
        'userName': userNameVal,
        'notes': notesVal,
        'newNotes': newNotesVal
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
        const courseItem = this.closest('.courseItem');
        const userNameVal = courseItem.querySelector('.userName').innerText;
        const courseNameVal = courseItem.querySelector('.courseName').innerText;
        const instructorNameVal = courseItem.querySelector('.instructorName').innerText;
        const courseLengthVal = courseItem.querySelector('.courseLength').innerText;
        const notesVal = courseItem.querySelector('.notes').innerText;
        const completionStatusVal = courseItem.querySelector('.completionStatus').innerText;
        const thumbUpText = courseItem.querySelector('.thumbUp').innerText;
        const thumbUpVal = parseInt(thumbUpText.replace('Total upvotes: ','').trim());
        const courseId = courseItem.getAttribute('data-id') //stores id in data attribute
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            '_id': courseId,
            'userName': userNameVal,
            'courseName': courseNameVal,
            'instructorName': instructorNameVal,
            'courseLength': courseLengthVal,
            'notes': notesVal,
            'completionStatus': completionStatusVal,
            'thumbUp': thumbUpVal
          })
        }).then(function (response) {
          window.location.reload(true)
        })
      });
});
