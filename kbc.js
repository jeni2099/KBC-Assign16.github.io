var kbc = {
    'current_ques': 0,
    'print_ques'  : function() {
        var q1 = prompt(kbc.ques_list[0] + kbc.options);
        var q2 = prompt(kbc.ques_list[1] + kbc.options);
        var q3 = prompt(kbc.ques_list[2] + kbc.options);

        if (q1 == kbc.correct_ans[0]) {
            console.log("Correct answer");
        } else {
            console.log("Incorrect answer");
        }
        if (q2 == kbc.correct_ans[1]) {
            console.log("Correct answer");
        } else {
            console.log("Incorrect answer");
        }
        if (q3 == kbc.correct_ans[2]) {
            console.log("Correct answer");
        } else {
            console.log("Incorrect answer");
        }
    },
    'ques_list'  : ["Jimin bday:", "V bday:", "JK bday:" ],
    'correct_ans': ["Oct 13", "Dec 30", "Sep 1"],
    'options'    : ["Sep1", "Oct 13", "Dec 30"],
};

var ques = kbc.ques_list;
console.log(ques);

var ques1 = kbc.print_ques();
console.log(ques1);
