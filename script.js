
const rows = document.querySelectorAll("#scoreTable tbody tr");

rows.forEach(function(row) {

    const inputs = row.querySelectorAll(".score");

    inputs.forEach(function(input) {

        input.addEventListener("input", function() {

            let total = 0;
            let hasScore = false;

            inputs.forEach(function(field) {

                let score = Number(field.value);

                if (field.value !== "") {
                    hasScore = true;
                }

                if (score < 0 || score > Number(field.max)) {
                    field.value = "";
                    score = 0;
                }

                total += score;
            });

            const totalCell = row.querySelector(".total");
            const gradeCell = row.querySelector(".grade");

            totalCell.textContent = total;

            if (!hasScore) {
                gradeCell.textContent = "-";
            }
            else if (total >= 70) {
                gradeCell.textContent = "A";
            }
            else if (total >= 60) {
                gradeCell.textContent = "B";
            }
            else if (total >= 50) {
                gradeCell.textContent = "C";
            }
            else if (total >= 45) {
                gradeCell.textContent = "D";
            }
            else if (total >= 40) {
                gradeCell.textContent = "E";
            }
            else {
                gradeCell.textContent = "F";
            }

        });

    });

});
