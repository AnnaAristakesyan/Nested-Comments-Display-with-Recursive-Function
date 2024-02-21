let container = document.querySelector('.container');

const comments = [
    {
      id: 1,
      text: "This is the first comment",
      parentId: null,
      replies: [
        {
          id: 2,
          text: "This is a reply to the first comment",
          parentId: 1,
          replies: [
            {
              id: 3,
              text: "This is a nested reply",
              parentId: 2,
              replies: [] 
            }
          ]
        }
      ]
    },
    {
      id: 4,
      text: "This is an independent comment",
      parentId: null,
      replies: [
        {
            id: 5,
            text: "This is a reply to the independent comment",
            parentId: 1,
            replies: [
                {
                    id: 6,
                    text: "This is a nested reply to undependent comment",
                    parentId: 2,
                    replies: [
                       { id: 7,
                        text: "This is a reply to the reply to the independent comment",
                        parentId: 3,
                        replies: []
                       }
                    ] 
                  }
            ] 
        }
      ]
    },
  ];
 
document.addEventListener("DOMContentLoaded", function(){
    generate(comments, 0)
})

function generate(array, level){
array.forEach((elem) => {
    let newDiv = document.createElement('div');
    newDiv.className = "comment";
    newDiv.innerHTML = `${elem.text}`;
    newDiv.style = `
    margin-left: ${level * 20}px;
    background-color: rgb(${95 * level}, ${75 * level}, 231);`
    container.appendChild(newDiv);
    if(elem.replies.length > 0){
        generate(elem.replies, level + 1)
    }
})
}
