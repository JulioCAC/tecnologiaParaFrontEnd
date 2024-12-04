import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Button, List, ListItem, ListItemText, Typography, Box, Paper, Dialog, DialogTitle, DialogContent, DialogActions, Snackbar, Alert } from '@mui/material'

const url = "http://localhost:3000/noticias"

const AdminNoticias = () => {
  const [noticias, setNoticias] = useState([])
  const [noticiaSelecionada, setNoticiaSelecionada] = useState(null) // Notícia a ser removida
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [alertMessage, setAlertMessage] = useState('') // Mensagem personalizada para o alert
  const [alertType, setAlertType] = useState('success') // Tipo do alert (sucesso ou erro)
  const [isSuccessOpen, setIsSuccessOpen] = useState(false) // Controle do snackbar de sucesso
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(url)
        setNoticias(res.data)
      } catch (error) {
        console.error("Erro ao buscar as notícias: ", error)
      }
    }
    fetchData()
  }, [])

 
  useEffect(() => {
    if (location.state?.successMessage) {
      setAlertMessage(location.state.successMessage)
      setAlertType('success')
      setIsSuccessOpen(true)
    }
  }, [location.state])

  const abrirModalRemover = (noticia) => {
    setNoticiaSelecionada(noticia)
    setIsModalOpen(true)
  }

  const fecharModalRemover = () => {
    setIsModalOpen(false)
    setNoticiaSelecionada(null)
  }

  const removerNoticia = async () => {
    if (!noticiaSelecionada) return
    try {
      await axios.delete(`${url}/${noticiaSelecionada.id}`)
      setNoticias(noticias.filter(noticia => noticia.id !== noticiaSelecionada.id))
      fecharModalRemover()
      setAlertMessage("Notícia removida com sucesso!")
      setAlertType('success')
      setIsSuccessOpen(true)
    } catch (error) {
      console.error("Erro ao remover a notícia: ", error)
      setAlertMessage("Erro ao remover a notícia.")
      setAlertType('error')
      setIsSuccessOpen(true)
    }
  }

  const editarNoticia = (noticia) => {
 
    navigate(`/editar-noticia/${noticia.id}`)
  }

  return (
    <Box sx={{ p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
      <Typography variant="h4" gutterBottom>Gerenciar Notícias</Typography>
      <Button variant="contained" color="primary" component={Link} to="/cadastrar-noticia" sx={{ mb: 2 }}>
        Cadastrar Nova Notícia
      </Button>
      <List>
        {noticias.map((noticia) => (
          <ListItem key={noticia.id} divider component={Paper} sx={{ mb: 2, p: 2, backgroundColor: '#ffffff', borderRadius: '8px' }}>
            <ListItemText primary={noticia.titulo} secondary={noticia.subtitulo} />
            <Button 
              variant="contained" 
              color="secondary" 
              onClick={() => editarNoticia(noticia)} 
              sx={{ mr: 1 }}
            >
              Editar
            </Button>
            <Button 
              variant="contained" 
              color="error" 
              onClick={() => abrirModalRemover(noticia)} 
              sx={{ backgroundColor: 'red', '&:hover': { backgroundColor: 'darkred' } }}
            >
              Remover
            </Button>
          </ListItem>
        ))}
      </List>

      {/* Modal de confirmação de remoção */}
      <Dialog open={isModalOpen} onClose={fecharModalRemover}>
        <DialogTitle>Confirmar Remoção</DialogTitle>
        <DialogContent>
          <Typography variant="body1">
            Tem certeza de que deseja remover a notícia <strong>{noticiaSelecionada?.titulo}</strong>?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={fecharModalRemover} variant="outlined" color="primary">
            Cancelar
          </Button>
          <Button onClick={removerNoticia} variant="contained" color="error">
            Remover
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar de sucesso ou erro */}
      <Snackbar 
        open={isSuccessOpen} 
        autoHideDuration={3000} 
        onClose={() => setIsSuccessOpen(false)} 
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        sx={{ mt: 5 }} // Margem superior
      >
        <Alert onClose={() => setIsSuccessOpen(false)} severity={alertType} variant="filled">
          {alertMessage}
        </Alert>
      </Snackbar>
    </Box>
  )
}

export default AdminNoticias
