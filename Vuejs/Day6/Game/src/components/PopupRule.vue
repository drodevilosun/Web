<template>
    <div class="wrapper-popup" v-bind:class="getClassPopup">
        <div class="rule">
            <h3>Luật chơi</h3>
            <p>this is a rule to play game</p>
            <button 
                v-on:click="confirm"
                class="confirm">Understood</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'popup-rule',
    props: {
        isOpenPopupCom: {type: Boolean, default: false}
    },
    data() {
        return {

        }
    },
    methods: {
        confirm() 
        {
            console.log('Confirm in Popup');
            this.$emit('handleConfirmCom');
        }
    },
    computed: {
        getClassPopup:function() {
            return {
                'open-popup': this.isOpenPopupCom
            }
        }
    }
}
</script>

<style>
    .wrapper-popup {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0);
        opacity: 0;
        visibility: hidden;
        transition: all .3s ease;
    }
    .wrapper-popup.open-popup {
        opacity: 1;
        visibility: visible;
        transition: all .3s ease;
    }
    .rule {
        width: 300px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) scale(1.2);
        background-color: #fff;
        position: absolute;
        font-family: Arial, Helvetica, sans-serif;
        transition: all .3s ease;
    }
    .open-popup .rule {
        transform: translate(-50%, -50%) scale(1);
    }
    .rule h3 {
        margin-bottom: 10px;
    }
    .rule .confirm {
        cursor: pointer;
        border: 2px solid #333;
        padding: 8px 15px;
        background-color: #fff;
        transition: all .3s ease;
    }
    .rule .confirm:hover {
        color: #fff;
        background-color: #333;
    }
</style>
