# PeliFlix 🎬

## 📌 Objetivo
Aplicación en **React** para **listar, buscar y agregar películas**.

---

## 🏗 Estructura de la Aplicación

### 🔹 `App.js` (Componente Principal)
- Administra el estado **`listadoState`** con las películas.
- Renderiza los siguientes componentes:
  - **`Listado.js`** → Muestra las películas.
  - **`Buscador.js`** → Filtra las películas.
  - **`Crear.js`** → Agrega nuevas películas.

---

### 🔹 `Buscador.js` (Buscar Películas)
- Filtra las películas en **tiempo real** según el título ingresado.
- Si no encuentra coincidencias, recupera las películas desde `localStorage`.

---

## 🛠️ Funcionalidades CRUD

### 📝 1. `Crear.js` (Añadir Películas)
✅ Permite agregar nuevas películas al listado.
✅ Guarda la película en `localStorage`.
✅ Actualiza el estado global **`listadoState`**.

#### 📌 Funcionamiento:
1. Captura los datos del formulario.
2. Crea un objeto `peli` con **título, descripción e ID único**.
3. Agrega la película al estado y la guarda en `localStorage`.

---

### ✏ 2. `Editar.js` (Editar Películas)
✅ Permite editar una película existente.
✅ Modifica `localStorage` y actualiza el estado **`listadoState`**.

#### 📌 Funcionamiento:
1. Busca la película en el almacenamiento local.
2. Modifica sus datos con los valores del formulario.
3. Guarda el nuevo listado actualizado.

---

### 📜 3. `Listado.js` (Mostrar, Editar y Eliminar Películas)
✅ Muestra todas las películas guardadas.
✅ Permite **editar o eliminar** películas.

#### 📌 Funcionamiento:
1. Obtiene las películas de `localStorage` al iniciar (`useEffect`).
2. Muestra cada película con botones **Editar** y **Borrar**.
3. **Editar**: Muestra el formulario de edición (`Editar.js`).
4. **Borrar**: Filtra el listado y actualiza `localStorage`.

---

## 🚀 Conclusión
"PeliFlix" es una **aplicación CRUD** simple que gestiona películas con **React, useState y localStorage**. 🎬✨