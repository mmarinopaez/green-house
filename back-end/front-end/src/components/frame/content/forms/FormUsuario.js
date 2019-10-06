import React, { Component } from "react";
class FormUsuarios extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-8">
          <div className="card">
            <div className="card-header card-header-info">
              <h4 className="card-title">Formulario usuarios</h4>
              <p className="card-category">Completa su informacion</p>
            </div>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col-md-3">
                    <div className="form-group">
                      <label className="bmd-label-floating">Nombre</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="bmd-label-floating">Cedula</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Telefono</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="bmd-label-floating">Direccion</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label className="bmd-label-floating">Usuario</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-4">
                    <div className="form-group">
                      <label className="bmd-label-floating">Contraseña</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="form-check form-check-inline">
                    <div className="form-group">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="materialInline1"
                      />
                      <label class="form-check-label" for="materialInline1">
                        Administrador
                      </label>
                    </div>
                  </div>

                  <div className="form-check form-check-inline">
                    <div className="form-group">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="materialInline2"
                      />
                      <label class="form-check-label" for="materialInline2">
                        Analista
                      </label>
                    </div>
                  </div>

                  <div className="form-check form-check-inline">
                    <div className="form-group">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="materialInline3"
                      />
                      <label class="form-check-label" for="materialInline3">
                        Operario
                      </label>
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-info pull-right">
                  Guardar
                </button>
                <div className="clearfix"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default FormUsuarios;