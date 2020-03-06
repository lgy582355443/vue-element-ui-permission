import { mapGetters, mapActions } from "vuex";

export const userMixin = {
  computed: {
    ...mapGetters(["userInfo"])
  },
  methods: {
    ...mapActions(["setUserInfo"])
  }
};
