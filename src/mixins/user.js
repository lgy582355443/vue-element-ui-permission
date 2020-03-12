import { mapGetters, mapActions } from "vuex";

export const userMixin = {
  computed: {
    ...mapGetters(["userInfo", "accessRoutes", "roleMenu"])
  },
  methods: {
    ...mapActions([
      "setUserInfo",
      "setAccessRoutes",
      "setRoleMenu",
      "logout",
      "updataPermissions"
    ])
  }
};
