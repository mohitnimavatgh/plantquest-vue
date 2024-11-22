export default {
  computed: {
    canAccess() {
      return (permission) => this.$store.getters.hasPermission(permission);
    },
    currentUserRole() {
      return this.$store.state.user.profile;
    }
  },
};
