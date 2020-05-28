<template>
<div class="wrapper clearfix">
    
    <players 
      v-bind:activeplayer="activePlayer"
      v-bind:currentScore="currentScore"
      v-bind:scoresPlayer="scoresPlayer"
    />
    <controls 
      v-on:handleNewGame="handleNewGame"
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
      dices: [3, 6]
      
    }
  },
  components: {
    Players,
    Controls,
    Dices,
    PopupRule
  },
  methods: {
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
