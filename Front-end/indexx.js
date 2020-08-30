console.log("Indexx loaded");
const btn = document.querySelector('#btn');
            btn.onclick = function () {
                const rbs = document.querySelectorAll('input[name="choice"]');
                let selectedValue;
                for (const rb of rbs) {
                    if (rb.checked) {
                        selectedValue = rb.value;
                        break;
                    }
                }
                if (selectedValue == "add") {
                    location.href = "add.html"
                } else if (selectedValue == "search") {
                    location.href = "search.html"
                } else if (selectedValue == "display") {
                    location.href = "display.html"
                }

            };