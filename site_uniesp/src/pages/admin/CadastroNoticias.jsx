import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Button, TextField, Typography, Box, Dialog, DialogTitle, DialogContent, DialogActions } from '@mui/material'

const url = "http://localhost:3000/noticias"

const CadastroNoticia = () => {
  const [titulo, setTitulo] = useState("")
  const [subtitulo, setSubtitulo] = useState("")
  const [texto, setTexto] = useState("")
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()

  const cadastrarNoticia = async (e) => {
    e.preventDefault()
    try {
      await axios.post(url, { titulo, subtitulo, texto })
      setIsModalOpen(true) 
    } catch (error) {
      console.error("Erro ao cadastrar a notícia: ", error)
    }
  }

  const handleCadastrarOutra = () => {
    setIsModalOpen(false) 
    setTitulo("") 
    setSubtitulo("")
    setTexto("")
  }

  const handleIrParaAdmin = () => {
    setIsModalOpen(false)
    navigate('/admin-noticias') 
  }

  return (
    <>
      <Box component="form" onSubmit={cadastrarNoticia} noValidate sx={{ mt: 3, p: 4, backgroundColor: '#f9f9f9', borderRadius: '8px' }}>
        <Typography variant="h4" gutterBottom>Cadastrar Notícia</Typography>
        <TextField label="Título" fullWidth margin="normal" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
        <TextField label="Subtítulo" fullWidth margin="normal" value={subtitulo} onChange={(e) => setSubtitulo(e.target.value)} />
        <TextField label="Texto" fullWidth multiline rows={4} margin="normal" value={texto} onChange={(e) => setTexto(e.target.value)} />
        <Button type="submit" variant="contained" color="primary">Cadastrar</Button>
      </Box>

      {/* Modal de confirmação usando MUI Dialog */}
      <Dialog open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DialogTitle>Sucesso!</DialogTitle>
        <DialogContent>
          <Typography variant="body1">A notícia foi cadastrada com sucesso.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCadastrarOutra} variant="outlined" color="primary">
            Cadastrar Outra Noticia
          </Button>
          <Button onClick={handleIrParaAdmin} variant="contained" color="primary">
            Fechar
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default CadastroNoticia
