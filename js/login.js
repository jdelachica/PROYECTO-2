//ADMIN
        if (!localStorage.getItem("Administrador")) {
          localStorage.setItem("Administrador", "admin_password");
      }

      const loginForm = document.getElementById("login-form");
      const usernameInput = document.getElementById("username");
      const passwordInput = document.getElementById("password");

      loginForm.addEventListener("submit", function(event) {
          event.preventDefault();
          const username = usernameInput.value;
          const password = passwordInput.value;

          if (localStorage.getItem(username) === password) {
              if (username === "Administrador") {
                  window.location.href = "admin.html";
              } else {
                  window.location.href="index.html";
              }
          } else {
              alert("Nombre de usuario o contraseña incorrectos.");
          }
      });

      const registerForm = document.getElementById("register-form");
      const newUsernameInput = document.getElementById("new-username");
      const newPasswordInput = document.getElementById("new-password");

      registerForm.addEventListener("submit", function(event) {
          event.preventDefault();
          const newUsername = newUsernameInput.value;
          const newPassword = newPasswordInput.value;

          if (localStorage.getItem(newUsername)) {
              alert("Este nombre de usuario ya está en uso.");
          } else {
              localStorage.setItem(newUsername, newPassword);
              alert("Registro exitoso. Ahora puedes iniciar sesión.");
          }
      });