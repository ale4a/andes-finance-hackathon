![Andes Finance Logo](final-logo.png) <!-- Asegúrate de que la extensión de la imagen sea correcta -->

Bienvenido a **Andes Finance**, una plataforma que te permite:

- 🌍 Cambiar tus Bolivianos a USDT
- 📈 Invertir en el mercado cripto
- 💸 Pedir prestado dinero en USDT

## Herramientas Utilizadas 🛠️

- **Next.js**
- **React**
- **NextUI**
- **Tailwind CSS**
- **React Icons**
- **i18next**
- **next-i18next**
- **Privy**
- **Biconomy**
- **ethers**
- **Coinbase Wallet SDK**
- **Jest**
- **Testing Library**
- **ESLint**
- **Prettier**
- **Stylelint**
- **TypeScript**
- **GraphQL**
- **Framer Motion**
- **React Query**

## Cómo Clonar y Desplegar 🚀

Sigue estos pasos para clonar y desplegar el proyecto.

### Clonar el Repositorio

```ssh
git clone https://github.com/tuusuario/tu-nuevo-repo.git
cd tu-nuevo-repo
```

### Instalación de Dependencia

Asegúrate de tener **Yarn** instalado. Luego, instala las dependencias:

```ssh
yarn install
```

### Desarrollo Local

Para iniciar el entorno de desarrollo local:

```ssh
yarn dev
```

### Construcción para Producción

Para construir el proyecto para producción:

```ssh
yarn build
```

### Despliegue

Para iniciar el servidor en producción:

```ssh
yarn start
```

### Comprobaciones de Calidad

Para verificar y corregir el formato de código, linting y estilo:

```ssh
yarn check
```

Para ejecutar pruebas unitarias:

```ssh
yarn test
```

Para ejecutar pruebas unitarias con cobertura:

```ssh
yarn test:coverage
```

## Contracts

Este proyecto está construido usando Foundry. Para más información, visita la documentación [aquí](https://book.getfoundry.sh/).

### Disclaimer

Los contratos Solidity proporcionados son solo para fines educativos y no están garantizados para ningún uso específico. No han sido auditados y pueden contener vulnerabilidades, por lo que no deben ser desplegados en entornos de producción. Úsalos bajo tu propio riesgo.

### Contenido

- **BuyMeACoffee**: Contrato para comprar un café al propietario con `0.001 ether` y enviar un memo.
- **CustomERC1155**: Implementación de ejemplo de ERC1155 usando OpenZeppelin.
- **AllowlistNFT**: Contrato para acuñar un ERC721A desde una lista de permitidos o una acuñación pública.

### Contrato Desplegado

Puedes ver el contrato desplegado en Sepolia [aquí](https://sepolia.basescan.org/address/0x346E69073BE72D03806504E9434c5e6811d33f43).

### Layout del Proyecto

### Uso

#### Instalación

```ssh
curl -L https://foundry.paradigm.xyz | bash
foundryup
```

#### Instalación de dependencias

```ssh
forge install
```

#### Construcción

```ssh
forge build
```

#### Pruebas

```ssh
forge test
```

#### Despliegue en Base Sepolia

Configura tu archivo `.env` con tu clave privada y clave API de Base Sepolia, luego:

```shh
source .env
forge script script/BuyMeACoffee.s.sol:BuyMeACoffeeScript --broadcast --verify --rpc-url base_sepolia
```

Para más detalles, consulta la documentación completa y los ejemplos en el proyecto.

## Contribuir

Si deseas contribuir, instala Foundry y las dependencias:

```ssh

curl -L https://foundry.paradigm.xyz | bash
foundryup
forge install
forge build
```

¡Gracias por tu apoyo! ❤️
