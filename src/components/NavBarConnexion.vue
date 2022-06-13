<template>
    <div>
        <h1> CapChat - Créez votre capchat ! </h1><hr />
        <!-- Inscription -->
        <div id="inscription" tabindex="-1" aria-hidden="true">
            <div>
                <form @submit.prevent="inscription()">
                            <h5>- Formulaire d'inscription -</h5>

                            <div>
                                <label class="form-label">Pseudo : </label>
                                <input type="text" v-model="surnomInscription" class="form-control" required
                                    :disabled="inscriptionBool">
                            </div>

                            <div>
                                <label class="form-label">Mot de passe : </label>
                                <input type="password" v-model="mdpInscription" class="form-control" required
                                    :disabled="inscriptionBool">
                            </div>

                            <div>
                                <label class="form-label">Confirmation du mot de passe : </label>
                                <input type="password" v-model="mdpConfirmeInscription" class="form-control" required
                                    :disabled="inscriptionBool">
                            </div>

                        <div class="alert alert-danger" role="alert" v-if="errorBoolInscription">
                            {{errorMsg}}
                        </div>
                        <div class="modal-footer" v-if="!inscriptionBool">
                            <button type="submit" class="btn btn-primary">Inscription</button>
                        </div>

                        <div style="text-align: center;" v-else>
                            {{inscriptionMsg}}
                            <br>
                            <a style="cursor: pointer;" aria-label="Close" @click="toAccount()">Cliquer ici pour accedez à votre compte</a>
                        </div>

                </form>
            </div>
        </div>

        <!-- Connexion -->
        <div id="connexion" tabindex="-1" aria-hidden="true">
            <div>
                <form @submit.prevent="connexion()">
                            <h5>- Formulaire de connexion -</h5>

                            <div>
                                <label class="form-label">Pseudo : </label>
                                <input type="text" v-model="surnomConnexion" class="form-control" required>
                            </div>

                            <div>
                                <label class="form-label">Mot de passe : </label>
                                <input type="password" v-model="mdpConnexion" class="form-control" required>
                            </div>

                            <div role="alert" v-if="errorBoolConnexion">
                                {{errorMsg}}
                            </div>

                        <div>
                            <button type="submit" aria-label="Close" class="btn btn-primary">Connexion</button>
                        </div>

                </form>
            </div>
        </div>

    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            inscriptionBool: false,
            inscriptionMsg: null,
            errorBoolConnexion: false,
            errorBoolInscription: false,
            errorMsg: null,
            surnomInscription: null,
            mdpInscription: null,
            mdpConfirmeInscription: null,
            surnomConnexion: null,
            mdpConnexion: null,
            mdpConfirmeConnexion: null
        }
    },
    methods: {
        connexion() {
            axios.post('connexion', {
                username: this.surnomConnexion,
                password: this.mdpConnexion
            })
            .then(
                data => {
                    this.errorBoolConnexion = false;
                    this.$refs.Close.click();
                    localStorage.setItem('token', data.data.token)
                    this.$router.push('/MonCompte')
                }
            )
            .catch(
                err => {
                    this.errorMsg = err.response.data.message;
                    this.errorBoolConnexion = true;
                }
            )
        },
        inscription() {
            if (this.mdpInscription == this.mdpConfirmeInscription) {
                this.errorBoolInscription = false;
                axios.post('inscription', {
                    username: this.surnomInscription,
                    password: this.mdpInscription
                })
                .then(
                    data => {
                        this.inscriptionMsg = data.data.message
                        this.inscriptionBool = true;
                        this.errorBoolInscription = false;
                        localStorage.setItem('token', data.data.token)
                    }
                )
                .catch(
                    err => {
                        this.errorMsg = err.response.data.message;
                        this.errorBoolInscription = true;
                    }
                )

            }
            else {
                this.errorMsg = "dégage la"
                this.errorBoolInscription = true;
            }
        },
        toAccount() {
            this.$router.push('/MonCompte');
        }
    }
}
</script>
