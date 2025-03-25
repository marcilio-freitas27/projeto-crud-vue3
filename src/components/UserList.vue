<template>
    <div>
        <Button @click="addNewUser" label="Novo usuário" severity="Info" />
        <div v-if="addingUser">
            <form @submit.prevent="addUser" style="display:grid;margin: 20px;">
                <InputText v-model="newUser.name" placeholder="Nome" style="margin-bottom: 10px;" required />
                <InputText v-model="newUser.email" placeholder="E-mail" style="margin-bottom: 10px;" type="email"
                    required />
                <Button type="submit" label="Adicionar" severity="Info" style="margin-bottom: 10px;" />
                <Button @click="cancelAdd" label="Cancelar" severity="Info" />
            </form>
        </div>

        <DataTable :value="users" paginator :rows="5" :rowsPerPageOptions="[5, 10, 20, 50]"
            tableStyle="min-width: 50rem"
            paginatorTemplate="RowsPerPageDropdown FirstPageLink PrevPageLink CurrentPageReport NextPageLink LastPageLink"
            currentPageReportTemplate="{first} to {last} of {totalRecords}">
            <template #paginatorstart>
                <Button type="button" icon="pi pi-refresh" text />
            </template>
            <template #paginatorend>
                <Button type="button" icon="pi pi-download" text />
            </template>
            <Column field="id" header="ID" style="width: 5%"></Column>
            <Column field="name" header="Name" style="width: 25%"></Column>
            <Column field="email" header="E-mail" style="width: 25%"></Column>
            <Column header="Options" style="width: 10%">
                <template #body="slotProps">
                    <Button style="margin-bottom:10px;" @click="editUser(slotProps)" label="Editar"
                        severity="Warning" />
                    <Button @click="deleteUser(slotProps.index + 1)" label="Excluir" severity="Danger" />
                </template>
            </Column>
        </DataTable>

        <div v-if="editingUser" style="display:grid;margin: 20px;">
            <h3>Editar Usuário</h3>
            <InputText v-model="editingUser.name" placeholder="Nome" style="margin-bottom: 10px;" />
            <InputText v-model="editingUser.email" placeholder="E-mail" type="email" style="margin-bottom: 10px;" />
            <Button @click="updateUser" label="Atualizar" severity="Info" style="margin-bottom: 10px;" />
            <Button @click="cancelEdit" label="Cancelar" severity="Info" style="margin-bottom: 10px;" />
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from "vue";

const users = reactive([
    { id: 1, name: "João Silva", email: "joao@exemplo.com" },
    { id: 2, name: "Maria Souza", email: "maria@exemplo.com" },
]);

const newUser = reactive({ name: "", email: "" });
const editingUser = ref(null);
const addingUser = ref(null);

const addUser = () => {
    users.push({
        id: users.length + 1,
        ...newUser,
    });
    newUser.name = "";
    newUser.email = "";
};

const addNewUser = () => {
    addingUser.value = { ...true };
}

const editUser = (user) => {
    editingUser.value = { ...user.data };
};

const updateUser = () => {
    const index = users.findIndex((u) => u.id === editingUser.value.id);
    if (index !== -1) {
        users[index] = { ...editingUser.value };
    }
    editingUser.value = null;
};

const deleteUser = (id) => {
    const index = users.findIndex((u) => u.id === id);
    if (index !== -1) {
        users.splice(index, 1);
    } else {
        users.pop();
    }
};

const cancelEdit = () => {
    editingUser.value = null;
};

const cancelAdd = () => {
    addingUser.value = null;
};
</script>