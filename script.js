let counter = 0;
function Start(){
    document.getElementById("fromFile").onchange = function() {
        if (this.files && this.files[0]) { // если выбрали файл
            for (let i = 0; i < this.files.length; i++) {
                let reader = new FileReader();
                reader.onload = function (e) {
                    counter++
                    let new_container = document.createElement("div")
                    new_container.setAttribute("class", "container")
                    new_container.setAttribute("style", "margin:0;")

                    let new_img = document.createElement("img")
                    new_img.setAttribute("id", "image" + counter)
                    new_img.setAttribute("style", " max-width:100%;")
                    let result_box = document.createElement("pre")
                    result_box.setAttribute("id", "result")
                    result_box.setAttribute("style", "box-sizing: border-box")

                    new_container.appendChild(new_img)
                    new_container.appendChild(result_box)
                    document.getElementById("files").appendChild(new_container);
                    let name = '#image' + counter
                    $(`${name}`).attr("src", e.target.result);
                }
                reader.readAsDataURL(this.files[i])
            }
            document.getElementById("buttons").setAttribute("style", "visibility: visible;")
        }
    }
}
function reset(){
    document.getElementById("files").innerHTML = null
    document.getElementById("buttons").setAttribute("style", "visibility: hidden")
    counter = 0;
}

function get_result(){
    let containers = document.getElementById("files").children
    const sendCanvasAsBlob = (canvas) => {
        if (canvas.toBlob) {
            canvas.toBlob(
                function(blob) {
                    let formData = new FormData();
                    formData.append('image', blob);
                    $.ajax({
                        type: "POST",
                        url: "http://localhost:8080/photoFrame",
                        data: formData,
                        processData: false,
                        contentType: false
                    });
                },
                'image/png'
            );
        }
        console.log('asdasdasd');
    };
    for (let i = 0; i < containers.length; i++){
        let container = containers[i]
        container.lastChild.textContent = " Результат:\n текст\n текст\n текст\n текст" +
            "\n текст\n текст\n текст"
    }
}
