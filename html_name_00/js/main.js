function clickMore(){
    alert('工事中です、ちょっとまっててね。');
}

function clickContact(){
    // console.log('name: ', formElements.name.value);
    let nameText = document.getElementById('name');
    let kanaText = document.getElementById('kana');
    let emailText = document.getElementById('email');
 
    let channel = document.contactForm.channel;
    let channelNum = channel.selectedIndex;
    let channelText = channel.options[channelNum].value;

    let checkboxBusiness = document.getElementById('checkbox-business');
    let checkboxJob = document.getElementById('checkbox-job');
    let checkboxWork = document.getElementById('checkbox-work');
    let checkboxSkill = document.getElementById('checkbox-skill');

    let checkboxBusinessText = '';
    if (checkboxBusiness.checked){
        checkboxBusinessText = '起業をしたい';
    }

    let checkboxJobText = '';
    if (checkboxJob.checked){
      checkboxJobText = 'チーズ系企業に就職・転職したい';
    }

    let checkboxWorkText = '';
    if (checkboxWork.checked){
      checkboxWorkText = 'チーズとかかわる仕事をしており仕事に生かしたい';
    }

    let checkboxSkillText = '';
    if (checkboxSkill.checked){
      checkboxSkillText = 'チーズの概要を身に着けたい';
    }

    let detailText = document.getElementById('detail');

    if (!nameText.value
        || !kanaText.value
        || !emailText.value
        || !channelText
        || (!checkboxBusinessText && !checkboxJobText && !checkboxWorkText && !checkboxSkillText)
        || !detailText.value) {
        alert('すべて必須入力ですよ、気合がたりませんね、、、');
        exit
    }

    alert('入力ありがとう。下記内容で問い合わせが完了しました！\n\n名前\n'
    + nameText.value
    + '\n\nカナ\n'
    + kanaText.value
    + '\n\nメールアドレス\n'
    + emailText.value
    + '\n\nチーズアカデミーを知ったきっかけ\n'
    + channelText
    + '\n\n志望動機\n'
    + checkboxBusinessText + '\n' + checkboxJobText + '\n' + checkboxWorkText + '\n' +checkboxSkillText
    + '\n\n詳細\n'
    + detailText.value);

}