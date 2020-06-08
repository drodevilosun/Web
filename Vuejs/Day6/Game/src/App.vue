<template>
<div class="wrapper clearfix">
    
    <players 
	    v-bind:isWinnerCom="isWinner"
      v-bind:activeplayer="activePlayer"
      v-bind:currentScore="currentScore"
      v-bind:scoresPlayer="scoresPlayer"
    />
    <controls 
      v-on:handleNewGame="handleNewGame"
      v-on:handleRollDice="handleRollDiceApp"
      v-on:handleHoldScoreCom="handleHoldScore"
      v-bind:finalScoreCom="finalScore"
      v-on:handleChangeFinalScoreCom="handleChangeFinalScore"
	  v-bind:isPlayingCom="isPlaying"
    />
    <dices 
      v-bind:dicesCom="dices"
    />
    <popup-rule 
      v-on:handleConfirmCom="handleConfirm"
      v-bind:isOpenPopupCom="isOpenPopup"
    />
    
    
    
</div>
</template>

<script>
import Players from './components/Players.vue';
import Controls from './components/Control.vue';
import Dices from './components/Dices';
import PopupRule from './components/PopupRule.vue';
export default {
  name: 'app',

  data () {
    return {
		isPlaying: false,
		activePlayer: 0, // ai là người chơi
		isOpenPopup: false,
		currentScore: 40,
		scoresPlayer: [40, 33],
		dices: [3, 6],
		finalScore: 10
      
    }
  },
  components: {
    Players,
    Controls,
    Dices,
    PopupRule
  },
  computed: {
	  isWinner () {
		  let {scoresPlayer, finalScore } = this;

		  if ((scoresPlayer[0] >= finalScore || scoresPlayer[1] >= finalScore) && this.isPlaying === true)
		  {
			  //DÙng cuộc chơi
			  this.isPlaying = false;
			  return true;
		  }
		  return false;
	  }
  },
  methods: {
    handleChangeFinalScore(e)
    {
        // console.log(e.target);
        // console.log(e.target.value);
		var number = parseInt(e.target.value);

		if(isNaN(number))
		{
			this.finalScore = '';
		}
		else
		{
			this.finalScore = number;
		}
        // console.log(parseInt(e.target.value));
    },
    handleHoldScore()
    {
		if (this.isPlaying === true)
		{
			console.log('handleHoldScore in App.vue');
			//activePlayer = 0 -> Player 1 is playing
			//acticePlayer = 1 -> Player 2 is playing
			//scoresPlayer -> array
			//scoresPlayer[0] -> scoresPlayer[activePlayer]
			//scoresPlayer[1] -> scoresPlayer[activePlayer]

			// this.scoresPlayer[this.activePlayer] = this.scoresPlayer[this.scoresPlayer] + this.currentScore;
			let {scoresPlayer, activePlayer, currentScore} = this;
			let scoreOld = scoresPlayer[activePlayer];

			// this.scoresPlayer[activePlayer] = scoreOld + currentScore;
			/* 
			Cách trên không khả thi vì địa chỉ của Array vẫn được giữ nguyên
			Nếu không thay đổi về mặt địa chỉ thì Vue sẽ không phản ứng lại
			-> vùng nhớ vẫn giữ nguyên -> 
			Có 2 cách thay đổi
				clone array: tạo 1 array mới: cú pháp: 
					let cloneScorePlayer = [...scoresPlayer];
				Sử dụng hàm set
			*/
			/*Cách 1: Clone  */
			// let cloneScorePlayer = [...scoresPlayer];
			// cloneScorePlayer[activePlayer] = scoreOld + currentScore;
			/*Khi tạo mảng mới thì chỉ cần gán mảng cũ qua địa chỉ mảng mới */
			// this.scoresPlayer = cloneScorePlayer;

			/*Cách 2: sử dụng set */
			this.$set(this.scoresPlayer, activePlayer, scoreOld + currentScore);

			if (!this.isWinner)
			{
				this.nextPlalyer();
			}
			// console.log(cloneScorePlayer);

		}
		else
		{
			alert("Vui lòng nhấp vào nút New Game");
		}
		
    },
    handleConfirm()
    {
        this.isPlaying = true;
        this.isOpenPopup = false;
        this.activePlayer = 0;
        this.scoresPlayer = [0, 0];
        console.log('Confirm in App');
        this.currentScore = 0;
        this.dices = [1, 1];
    },
    handleNewGame() 
    {
        console.log('handleNewGame App.vue');
        //Hiển thị Popup -> Show luật chơi
        this.isOpenPopup = true;

    },
    nextPlalyer()
    {
        // Đảo activePlayer
        this.activePlayer = this.activePlayer === 0 ? 1 : 0;
        this.currentScore = 0;
    },
    handleRollDiceApp()
    {
        console.log("handleRollDice App.vue");
        if (this.isPlaying)
        {
			//roll dice
			//Math.random(): 0->1
			/*
				0 <= x <= 1
				0*6 <= x*6 <= 1*6
				0 <= y= x*6 <= 6
			*/
			var dice1 = Math.floor(Math.random() * 6) + 1;
			var dice2 = Math.floor(Math.random() * 6) + 1;
			
			this.dices = [dice1, dice2];
			console.log(dice1, dice2);

			if (dice1 === 1 || dice2 ===1)
			{
				// Đổi lượt chơi
				let activePlayer = this.activePlayer;
				// Use arrow fucntion
				setTimeout(() => {
					console.log(this); //'this' ở đây thuộc thằng Vue
					alert(`Người chơi Player ${this.activePlayer + 1} đã quay trúng số 1. Next Player`);
				}, 10);
				// Use function()
				// setTimeout(function() {
				//     console.log(this); //'this' ở đây thuộc Window
				//     alert(`Người chơi Player ${activePlayer + 1} đã quay trúng số 1. Next Player`);
				// }, 10);
				
				this.nextPlalyer();
				// Reset điểm tạm thời về 0
			}
			else
			{
				// Cộng dồn vảo điểm tạm thời cho ngưởi chơi
				this.currentScore = this.currentScore + dice1 + dice2;
			}

        }
        else
        {
        	alert("Vui lòng nhấp vào nút New Game");
        }
    }
  }
}
</script>

<style>
  /**********************************************
  *** GENERAL
  **********************************************/

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      
  }

  .clearfix::after {
      content: "";
      display: table;
      clear: both;
  }

  body {
      background-image: linear-gradient(rgba(62, 20, 20, 0.4), rgba(62, 20, 20, 0.4)), url('/public/assets/back.jpg');
      background-size: cover;
      background-position: center;
      font-family: Lato;
      font-weight: 300;
      position: relative;
      height: 100vh;
      color: #555;
  }

  .wrapper {
      width: 1000px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: #fff;
      box-shadow: 0px 10px 50px rgba(0, 0, 0, 0.3);
      overflow: hidden;
  }
  

</style>
