<template>
    <div class="wrapper-controls">
        <button 
            v-on:click="newGame"
            class="control btn-new"><i class="ion-ios-plus-outline"></i>New game</button>
        <button 
            v-on:click="rollDice"
            class="control btn-roll"><i class="ion-ios-loop"></i>Roll dice
        </button>
        <button 
            v-on:click="$emit('handleHoldScoreCom')"
            class="control btn-hold"
        ><i class="ion-ios-download-outline"></i>Hold
        </button>
        
        <!-- Cách 1: Sử dụng v-model để ràng buộc dữ liệu 2 chiều 
            Không được sử dụng v-model vì finalScore ở đây là Props
        -->
        <input 
            v-bind:disabled="isPlayingCom"
            v-bind:value="finalScoreCom"
            v-on:input="$emit('handleChangeFinalScoreCom', $event)"
            type="number" placeholder="Final score" class="final-score">

        <!-- <input 
            v-model="valueTest"
            type="number" placeholder="Final score" class="final-score"> -->
        
        <!-- Cách 2: Sử dụng v-on:input để set giá trị lại cho value
            Sử dụng event để notification input khi có dữ liệu:
                Design 1 hàm  (handleInput)-->
        <!-- <input 
            v-bind:value="valueTest"
            v-on:input="handleInput"
            type="number" placeholder="Final score" class="final-score"> -->
        
        <!--      
        hoặc viết tắt.-->
        <!-- <input 
            v-bind:value="valueTest"
            v-on:input="valueTest = $event.target.value"
            type="number" placeholder="Final score" class="final-score"> -->
        <!-- dữ liệu thu thập từ ô input đều là dạng String -->
    
        <!-- 
            1. Ràng buộc dữ liệu (thuộc tính HTML) -> v-bind
                1 chiều từ data -> input
            2. Ràng buộc dữ liệu 2 chiều -> v-model 
                - 1 chiều từ data -> input
                - 1 chiều từ input -> data
            
            Nếu như nó không phải là data trực tiếp của Component Controls -> không được phép thay đổi
        -->
    </div>
</template>

<script>
export default {
    name: 'controls',
    props: {
        isPlayingCom: {type: Boolean, default: false},
        finalScoreCom: {type: [Number, String], default: 100}
    },
    data() {
        return {
            valueTest: 100
        }
    },
    methods: {
        // handleInput(e) {
        //     this.valueTest = e.target.value;
        //     console.log(e.target.value);
        // },
        newGame() {
            console.log('newGame Control.vue');
            // transmits event to handleNewGame of App.vue
            this.$emit('handleNewGame');
        },
        rollDice() {
            console.log('rollDice Control.vue');
            this.$emit('handleRollDice');
        }
    }
}
</script>

<style>
  /**********************************************
  *** Control
  **********************************************/
  .control {
      position: absolute;
      width: 200px;
      left: 50%;
      transform: translateX(-50%);
      color: #555;
      background: none;
      border: none;
      font-family: Lato;
      font-size: 20px;
      text-transform: uppercase;
      cursor: pointer;
      font-weight: 300;
      transition: background-color 0.3s, color 0.3s;
  }
  .control.disable {
      pointer-events: none;
  }

  .control:hover { font-weight: 600; }
  .control:hover i { margin-right: 20px; }

  .control:focus {
      outline: none;
  }

  .control i {
      color: #42b983;
      display: inline-block;
      margin-right: 15px;
      font-size: 32px;
      line-height: 1;
      vertical-align: text-top;
      margin-top: -4px;
      transition: margin 0.3s;
  }

  .btn-new { top: 45px;}
  .btn-roll { top: 403px;}
  .btn-hold { top: 467px;}

  .final-score {
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      top: 520px;
      color: #555;
      font-size: 18px;
      font-family: 'Lato';
      text-align: center;
      padding: 10px;
      width: 160px;
      text-transform: uppercase;
  }

  .final-score:focus { outline: none; }
</style>
