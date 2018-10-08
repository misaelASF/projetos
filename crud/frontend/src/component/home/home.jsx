import React from 'react'
import Main from '../template/main/main'

export default props =>
      <Main icon="home" title="Início" 
          subtitle="Segundo projeto de React">
          <div className="display-4">Bem Vindo!</div>
          <hr/>
          <p className="mb-0">Sistema desenvolvido em <strong><span className="text-danger">React</span></strong> sobre cadastro de alunos.</p>
      </Main>