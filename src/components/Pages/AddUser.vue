<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-card>
            <v-card-title>
              <h3>Add User</h3>
            </v-card-title>
            <v-card-subtitle class="pb-0">
              <v-form>
                <v-text-field
                  v-model="form.name"
                  label="Name"
                  placeholder="Enter name"
                  required
                />
                <v-text-field
                  v-model="form.jobTitle"
                  label="Job Title"
                  placeholder="Enter job title"
                  required
                />
                <v-text-field
                  v-model="form.email"
                  label="Email"
                  placeholder="Enter email"
                  type="email"
                  required
                />
                <v-text-field
                  v-model="form.mobile"
                  label="Mobile"
                  placeholder="Enter mobile number"
                  required
                />
                <v-select
                  v-model="form.status"
                  :items="statusOptions"
                  label="Status"
                  item-value="value"
                  item-text="label"
                  required
                />
                <v-select
                  v-model="form.role"
                  :items="allowedRoleOptions"
                  label="Role"
                  item-value="roleCode"
                  item-text="roleName"
                  required
                />
                <v-row justify="space-between" class="pt-4">
                  <v-col>
                    <v-btn type="submit" color="primary">Add User</v-btn>
                  </v-col>
                  <v-col class="text-right">
                    <v-btn color="secondary">Cancel</v-btn>
                  </v-col>
                </v-row>
              </v-form>
            </v-card-subtitle>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          name: "",
          jobTitle: "",
          email: "",
          mobile: "",
          status: "",
          role: "",
        },
      };
    },
    computed: {
      allowedRoles() {
        const roleMatrix = {
          gea: {
            sea: "Site Engineering Admin",
            eng: "Engineering Operator",
            opr: "Operator",
            obr: "Observer",
          },
          sea: {
            eng: "Engineering Operator",
            opr: "Operator",
            obr: "Observer",
          },
          eng: {
            opr: "Operator",
            obr: "Observer",
          },
          opr: {
            obr: "Observer",
          },
          obr: {},
        };
  
        return roleMatrix[this.currentUserRole] || {};
      },
      allowedRoleOptions() {
        return Object.entries(this.allowedRoles).map(([roleCode, roleName]) => ({
          roleCode,
          roleName,
        }));
      },
      statusOptions() {
        return [
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ];
      },
    },    
  };
  </script>