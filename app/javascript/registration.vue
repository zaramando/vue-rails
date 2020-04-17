<template>
  <Signup />  
</template>

<script>

import Signup from './components/registration/Signup';

export default {
  components: {
    Signup
  },
  data: function () {
    return {
      message: "Hello Registration!"
    }
  }
}
</script>
