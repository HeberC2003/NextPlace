import React, { useState } from "react";
import "./profile.css";

function ProfilePage() {
  const [user, setUser] = useState({
    name: "Christopher Ramirez",
    email: "chris@gmail.com",
    phone: "+503 7880-9088",
    photo: null
  });

  const [events] = useState([
    { id: 1, name: "Concierto de Rock", date: "12/09/2024", place: "Teatro Nacional San Salvador" },
    { id: 2, name: "Festival de Tecnología", date: "30/08/2024", place: "CIFCO" },
    { id: 3, name: "Charla de Finanzas", date: "01/07/2024", place: "UCA" }
  ]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setUser({ ...user, photo: URL.createObjectURL(file) });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSave = () => {
    alert("Datos guardados correctamente");
  };

  return (
    <div className="profile-container">
      <h2 className="profile-header">Configuración de datos personales de la cuenta</h2>

      <div className="profile-section">
        <div className="profile-photo-section">
          <img
            src={user.photo || "/default-avatar.png"}
            alt=""
            className="profile-photo"
          />
          <label className="upload-btn">
            Agregar o Cambiar foto
            <input type="file" accept="image/*" onChange={handlePhotoChange} />
          </label>
        </div>

        <div className="profile-info">
          <label>Nombre</label>
          <input
            name="name"
            type="text"
            value={user.name}
            onChange={handleChange}
          />


          <label>Correo</label>
          <input
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />

          <label>Teléfono</label>
          <input
            name="phone"
            type="text"
            value={user.phone}
            onChange={handleChange}
          />

          <div className="security-section">
          <h3>Seguridad</h3>

          <label>Contraseña nueva</label>
          <input type="password" placeholder= " ******** " />

          <label>Repetir contraseña</label>
          <input type="password" placeholder=  " ******** " />

          <button className="save-btn">Actualizar contraseña</button>
          </div>

          <button className="save-btn" onClick={handleSave}>
            Guardar cambios
          </button>
        </div>
      </div>

      <h3 className="events-title">Historial de eventos a los que asistio</h3>
      <div className="events-list">
        {events.map((e) => (
          <div key={e.id} className="event-card">
  <div className="event-header">
    <h4>{e.name}</h4>
    <button className="ticket-btn">Ver ticket</button>
  </div>

  <p>📅 {e.date}</p>
  <p>📍 {e.place}</p>
</div>

        ))}
      </div>
    </div>
  );
}

export default ProfilePage;
