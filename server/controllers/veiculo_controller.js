'use strict'

const axios = require('axios')

const getVeiculos = (req, res, next) => {
  const veiculosRequest = axios.get('http://187.85.164.118:3030/veiculos')
  const fotosRequest = axios.get('http://187.85.164.118:3030/fotosEstudio')

  axios.all([veiculosRequest, fotosRequest])
    .then(axios.spread((...responses) => {
      const veiculos = responses[0].data
      const fotos = responses[1].data

      const veiculosSemFotos = veiculos.map((veiculo) => {
        const fotosVeiculo = fotos.find(foto => foto["Id_Veiculo"] == veiculo["Id_Veiculo"])

        if (fotosVeiculo) {
          if (fotosVeiculo["Id_Foto_Estudio_Aberto"] == null && fotosVeiculo["Id_Foto_Estudio_Aberto_Avarias"] == null) {
            return { "id": veiculo["Id_Veiculo"], "placa": veiculo["Placa"] }
          }
        }
      })

      res.json(veiculosSemFotos)
    })).catch(next)
}

const getProjects = (req, res, next) => {
  const userId = req.params.id

  Project.findAll()
    .then(projects => res.json({
      ok: true,
      message: 'Projects found',
      projects,
      userId
    }))
    .catch(next)
}

const getProject = (req, res, next) => {
  const projectId = req.params.id

  Project.findById(projectId)
    .then(project => res.json({
      ok: true,
      message: 'Project found',
      project
    }))
    .catch(next)
}

const putProject = (req, res, next) => {
  const projectId = req.params.id
  const props = req.body.project

  Project.update(projectId, props)
    .then(project => res.json({
      ok: true,
      message: 'Project updated',
      project
    }))
    .catch(next)
}

const deleteProject = (req, res, next) => {
  const projectId = req.params.id

  Project.destroy(projectId)
    .then(deleteCount => res.json({
      ok: true,
      message: 'Project deleted',
      deleteCount
    }))
    .catch(next)
}

module.exports = {
  getVeiculos
}
