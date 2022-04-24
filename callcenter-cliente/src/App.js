import './App.css';

function App() {
  return (
    <>
      <div class="row justify-content-center  main-container">
        <div class="col-md-9 col-lg-12 col-xl-10">
          <div class="card shadow-lg o-hidden border-0 my-5">
            <div class="card-body p-0">
              <div class="row">
                <div class="col-lg-6 d-none d-lg-flex">
                  <div class="flex-grow-1 bg-login-image"></div>
                </div>
                <div class="col-lg-6">
                  <div class="p-5">
                    <div class="text-center">
                      <h4 class="text-dark mb-4">Bienvenido!</h4>
                    </div>
                    <form class="user">
                      <div class="mb-3">
                        <input
                          class="form-control form-control-user"
                          type="email"
                          id="exampleInputEmail"
                          aria-describedby="emailHelp"
                          placeholder="Ingresa tu e-mail..."
                          name="email"
                        />
                      </div>
                      <div class="mb-3">
                        <input
                          class="form-control form-control-user"
                          type="password"
                          id="exampleInputPassword"
                          placeholder="Contraseña"
                          name="password"
                        />
                      </div>
                      <div class="mb-3">
                        <div class="custom-control custom-checkbox small">
                          <div class="form-check">
                            <input
                              class="form-check-input custom-control-input"
                              type="checkbox"
                              id="formCheck-1"
                            />
                            <label
                              class="form-check-label custom-control-label"
                              for="formCheck-1"
                            >
                              Recuerdame
                            </label>
                          </div>
                        </div>
                      </div>
                      <button
                        class="btn btn-primary d-block btn-user w-100"
                        type="submit"
                      >
                        Entrar
                      </button>
                      <hr />
                      <a
                        class="btn btn-primary d-block btn-google btn-user w-100 mb-2"
                        role="button"
                        href="google.com"
                      >
                        <i class="fab fa-google"></i>&nbsp; Login with Google
                      </a>
                      <a
                        class="btn btn-primary d-block btn-facebook btn-user w-100"
                        role="button"
                        href="facebook.com"
                      >
                        <i class="fab fa-facebook-f"></i>&nbsp; Logueate con
                        Facebook
                      </a>
                      <hr />
                    </form>
                    <div class="text-center">
                      <a class="small" href="forgot-password.html">
                        ¿Olvidaste tu contraseña?
                      </a>
                    </div>
                    <div class="text-center">
                      <a class="small" href="register.html">
                        Crea una cuenta!
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
