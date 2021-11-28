import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`  
  * {
    background-color: ${({ theme }) => theme.body};
    z-index: auto;
  }
  
  #root {
    position: relative;
    min-height: 100vh;
  }
  
  .positioning {
    padding-bottom: 2.5rem;
  }

  .text-toggle {
      color: ${({ theme }) => theme.text};
  }

  .toggle-button {
    color: ${({ theme }) => theme.text};
  }





  .navbar .navbar-nav .nav-link:hover {
    color: ${({ theme }) => theme.text};
}

@media only screen and (min-width: 650px) {
    .navbar .navbar-nav .nav-link {
        padding: 1em 0.7em;
    }

    .navbar {
        padding: 0;
    }

    .navbar .navbar-brand {
        padding: 0 0.7em;
    }
}

.navbar .navbar-nav .nav-link {
    position: relative;
}

.navbar .navbar-nav .nav-link::after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background-color: ${({ theme }) => theme.text};
    color: transparent;
    width: 0%;
    content: '';
    height: 1.5px;
    transition: all 0.5s;
}

.navbar .navbar-nav .nav-link:hover::after {
    width: 100%;
}

.navbar-light .navbar-nav .nav-link {
    color: ${({ theme }) => theme.text};
    font-family: 'Lora', serif;
}

.navbar-light .navbar-brand {
    color: white;
}

.np {
    color: white;
    font-family: 'Lora', serif;
    background-color: ${({ theme }) => theme.text};
    border-radius: 100%;
    border-color: #efbbcc;
}

.navbar .navbar-brand {
    padding: 1px 5px;
}

.navbar-light .navbar-brand:focus, .navbar-light .navbar-brand:hover {
    color: white;
}

.navbar-margin {
    margin-left: 10px;
}

.navbar-light .navbar-toggler {
    color: ${({ theme }) => theme.text};
    border: none;
}

.navbar-light .navbar-nav .nav-link:focus, .navbar-light .navbar-nav .nav-link:hover {
    color: ${({ theme }) => theme.text};
}

.toggle {
    margin-left: 50%;
}

`;