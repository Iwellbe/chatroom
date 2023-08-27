new Vue({
    el: '#app',
    data: {
      showModal: false,
      avatars: [
        "img/img1.jpg",
        "img/img2.jpg",
        "img/img3.jpg",
        "img/img4.jpg",
        "img/img5.jpg",
        "img/img6.jpg",
        "img/img7.jpg",
        "img/img8.jpg",
        "img/img9.jpg",
        "img/img10.jpg",
        "img/img11.jpg"
      ],
      selectedAvatar: "img/img2.jpg",
      randomNames: ["云玄", "雪羽", "梦瑶", "幻溪", "心悦", "幽岚", "斯文", "微雨", "飞霜", "天宇", "紫薇", "星璇", "苍月", "雁凡", "幻音", "幽兰", "宛青", "忆丹", "雨枫", "诗梦", 
      "沐风轩", "飞雪乾坤", "白月华庭", "翠羽紫微", "雪岚幻谷", "忘情若雪", "如梦仙舞", "风吟云咏", "安然如画", "纷飞星雨","神里凌华的狗","元神","启东"],
      randomName: "",
      diceIcon: 'img/emoji_u1f3b2.png', // 骰子图标路径
      isRolling: false // 是否正在滚动的标识
    },
    mounted() {
      this.generateRandomName();
    },
    methods: {
      // 模态框
      showAvatarModal() {
        this.showModal = true;
      },
      hideAvatarModal() {
        this.showModal = false;
      },
      selectAvatar(avatar) {
        this.selectedAvatar = avatar;
        this.hideAvatarModal();
      },


      generateRandomName() {
        const randomIndex = Math.floor(Math.random() * this.randomNames.length);
        this.randomName = this.randomNames[randomIndex];
      },
      changeAvatar() {
        const currentIndex = this.avatars.indexOf(this.selectedAvatar);
        const nextIndex = (currentIndex + 1) % this.avatars.length;
        this.selectedAvatar = this.avatars[nextIndex];
      },

      // 骰子动画
      rollDice() {
        this.isRolling = true;
        setTimeout(() => {
          this.isRolling = false;
        }, 1000); // 持续时间为1秒，根据需要调整
      },
      updateRandomNameAnddice() {
        this.generateRandomName();
        this.rollDice();
      },

      clearConfirmPassword() {
        this.confirmPassword = '';
      },
      login() {
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
          alert("密码和确认密码不一致，请重新输入！");
          return;
        }
      }
    }
  });