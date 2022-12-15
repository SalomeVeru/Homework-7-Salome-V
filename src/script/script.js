let answers = new Array(
    `Without a doubt`, 
    `Yes!`, 
    `Ask Mr. Allred`, 
    `It isn't likely`, 
    `it's possible`,
    `Addie says yes`, 
    `Not a chance`,
    `Ask again`, 
    `No`, 
    `Inconceivable!`, 
    `No Way`
    );
    function fortune() {
        let num = Math.round( (answers.length - 1) * Math.random());
        return answers[num];
    }
    document.querySelector('input[type="button"]').addEventListener('click',function(){
        document.querySelector('.triangle').classList.add('visible');
        if (this.form.question.value!='') this.form.answer.value = fortune();
    })