import { mapGetters, mapActions } from "vuex";

export const layoutMixin = {
  computed: {
    ...mapGetters(["isCollapse"])
  },
  methods: {
    ...mapActions(["setCollapse"])
  }
};
