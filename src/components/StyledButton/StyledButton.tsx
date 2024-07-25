import React, { ReactNode } from 'react';
import { styled } from '@mui/system'; // ou '@emotion/styled'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from '../../theme';

// Definindo a interface para as props do componente
interface StyledButtonProps {
  children: ReactNode;
}

// Criando o botão estilizado fora do componente
const StyledButtonStyled = styled('button')(({ theme }) => ({
  background: 'transparent',
  border: `1px solid ${theme.palette.primary.contrastText}`, // Corrigido: sem espaço
  borderRadius: '3px',
  padding: '5px 15px',
  width: '100%',
  color: theme.palette.primary.contrastText,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  '&:hover': {
    backgroundColor: theme.palette.secondary.light,
  },
}));


// Componente funcional
const StyledButton: React.FC<StyledButtonProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledButtonStyled>{children}</StyledButtonStyled>
    </ThemeProvider>
  );
};

export default StyledButton;
