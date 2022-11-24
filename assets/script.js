let counter = 0;
let path;
function Start(){
    document.getElementById("formFile").onchange = async function() {
        if (this.files && this.files[0]) { // если выбрали файл
            for (let i = 0; i < this.files.length; i++) {
                let reader = new FileReader();
                reader.onload = async function (e) {
                    counter++
                    let new_container = document.createElement("div")
                    new_container.setAttribute("class", "container position-absolute top-50" +
                        " start-50 translate-middle d-block w-25")

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

                    const result = await eel.upload_file(e.target.result)();
                    //
                    console.log(result);
                }
                path = reader.readAsDataURL(this.files[i])
            }
            document.getElementById("buttons").setAttribute("style", "visibility: visible")
            document.getElementById("forms").setAttribute("style", "visibility: hidden")
        }
    }
}
function reset(){
    document.getElementById('formFile').value = ""
    document.getElementById("files").innerHTML = null
    document.getElementById("buttons").setAttribute("style", "visibility: hidden")
    document.getElementById("forms").setAttribute("style", "visibility: visible")
    counter = 0;
}

function get_result(){
    let containers = document.getElementById("files").children
    for (let i = 0; i < containers.length; i++){
        let container = containers[i]
        container.lastChild.textContent = " Результат:\n текст\n текст\n текст\n текст" +
            "\n текст\n текст\n текст"
    }
}

function get(file){
    file = name;
}