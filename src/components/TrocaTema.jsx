import React, { useState, createContext, useContext } from 'react';
import styles from '../config/styles'; // Certifique-se de que o caminho esteja correto

// Criação do contexto de tema
const ThemeContext = createContext();

// Hook personalizado para usar o contexto de tema
const useTheme = () => useContext(ThemeContext);

const App = () => {
  const [theme, setTheme] = useState('light');

  // Função para alternar o tema
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    // Provedor de contexto que envolve a aplicação
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div
        style={{
          backgroundColor: theme === 'light' ? '#fff' : '#333',
          color: theme === 'light' ? '#000' : '#fff',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'Roboto, sans-serif', // Define a fonte padrão
        }}
      >
        <h1
          style={{
            fontSize: '24px', // Tamanho menor da fonte
            textAlign: 'center', // Centraliza o texto
            fontWeight: '700', // Peso da fonte
            marginBottom: '20px', // Espaçamento abaixo do texto
          }}
        >
          Aplicação com Alternância de Tema
        </h1>
        <ThemeToggleButton />
      </div>
    </ThemeContext.Provider>
  );
};

// Componente de botão para alternar o tema
const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#007bff' : '#8a0b07', // Cor do fundo muda conforme o tema
        color: '#fff', // Cor do texto
        border: 'none', // Remove a borda padrão
        borderRadius: '8px', // Bordas arredondadas
        padding: '10px 20px', // Espaçamento interno
        cursor: 'pointer', // Cursor de ponteiro ao passar o mouse
        fontSize: '16px', // Tamanho da fonte
        fontWeight: 'bold', // Texto em negrito
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Sombra leve
        transition: 'background-color 0.3s ease', // Transição suave ao alternar temas
      }}
    >
      Mudar para {theme === 'light' ? 'Tema Escuro' : 'Tema Claro'}
    </button>
  );
};

export default App;
