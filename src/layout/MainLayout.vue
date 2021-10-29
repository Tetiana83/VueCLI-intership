<template>
  <div class="container-wrapper">
        <div class="left-wrapper">
            <div class="left-first-block">
                <div class="left-logo">
                   <p>Projectus</p>
                </div>
            </div>
            <div class="left-second-block">
                <div>
                    <div class="left-user-avatar"><img :src="currentUser.avatar" alt="avatar"></div>
                    <div class="left-user-data">
                        <p>{{currentUser.firstName}} {{currentUser.secondName}}</p>
                        <p>{{currentUser.workPosition}}</p>
                    </div>
                </div>
                <div class="left-dots">
                    <div class="dot" v-for="(dot, index) in dots" :key="index"></div>
                </div>
            </div>
            <div class="left-third-block">
                <div id="button" @click="toggle()">
                    <p id="done-task">{{comleteTasks}}</p>
                    <p>Completed Tasks</p>
                </div>
                <div>
                    <p id="open-task">{{openTasks}}</p>
                    <p>Open Tasks</p>
                </div>
            </div>
            <div class="left-menu">
                <div class="menu-title">Menu</div>
                <div class="menu-list">
                    <ul>
                        <li>Home</li>
                        <li>My Tasks</li>
                        <li class="notifi">
                            <span>{{notifiNum}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="right-wrapper">
            <div class="header">
                <div class="header-content">
                    <div>
                        <div class="logo"><img src="../assets/Shapes@2x.png" alt=""></div>
                        <div class="header-title">Website Redesign</div>
                        <div class="dots">
                            <div class="dot" v-for="(dot, index) in dots" :key="index"></div>
                        </div>
                    </div>
                    <div class="avatar-wrapper">
                        <div class="avatar" v-for="(ava, index) in avatars" :key="index">
                            <img :src="ava" alt="avatar">
                        </div>
                        <div class="share">
                            <p>Share</p>
                        </div>
                        <div class="chat">
                            <p>Chat</p>
                        </div>
                    </div>
                </div>
                <div class="nav-bar-wrapper">
                    <ul>
                        <li id="tab1" onclick="active(this)" v-for="(elem, index) in navBar" :key="index">
                          <a :href="elem.link" class="first">{{elem.title}}</a>
                        </li>
                    </ul>
                </div>
            </div>
            <router-view/>
        </div>
        <div class="window-wrapper" id="windowWrapper" v-if="modal" @click="modal = false">
            <div class="ask-window" id="askWindow">
                <div>
                    <h3>Are you sure you want to change the number of tasks?</h3>
                </div>
                <div class="answers">
                    <button class="yes" id="btnYes" @click="btnYes()">yes</button>
                    <button class="no" id="btnNo" @click="modal = false">no</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
  data () {
    return {
      comleteTasks: 372,
      openTasks: 11,
      modal: false,
      avatars: [
        'https://i.pravatar.cc/150?img=3',
        'https://i.pravatar.cc/150?img=4',
        'https://i.pravatar.cc/150?img=5'
      ],
      notifiNum: 3,
      dots: [
        1, 2, 3
      ],
      currentUser: {
        firstName: 'Jean',
        secondName: 'Gonzales',
        avatar: 'https://i.pravatar.cc/150?img=49',
        workPosition: 'Product Owner'
      },
      navBar: [
        { id: 1, title: 'Tasks', link: 'task' },
        { id: 2, title: 'Kanban', link: 'kanban' },
        { id: 3, title: 'Activity', link: 'activity' },
        { id: 4, title: 'Calendar', link: 'calendar' },
        { id: 5, title: 'Files', link: 'files' }
      ]
    }
  },
  methods: {
    toggle () {
      if (this.openTasks === 0) {
        alert('There are no tasks to complete!')
      } else { this.modal = !this.modal }
    },
    btnYes () {
      this.comleteTasks = this.comleteTasks + 1
      this.openTasks = this.openTasks - 1
    }
  }
}
</script>

<style>

</style>
