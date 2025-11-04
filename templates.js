export const templates = {
  home: () => `
    <section class="hero-gradient">
      <h1>Transformando Vidas, Construindo Futuros</h1>
      <p>Há mais de 15 anos promovendo educação, inclusão social e sustentabilidade em comunidades carentes. Junte-se a nós e faça a diferença!</p>
      <div class="hero-actions">
        <a href="#cadastro" class="btn-hero-yellow">Quero ser Voluntário</a>
        <a href="#projetos" class="btn-hero-green">Conhecer Projetos</a>
      </div>
    </section>

    <section class="stats-section">
      <div class="container">
        <h2>Sobre Nós</h2>
        <p>O <strong>Instituto Futuro Solidário</strong> é uma organização sem fins lucrativos fundada em 2010, dedicada a promover transformação social através de ações concretas e sustentáveis.</p>
        <div class="stats-grid">
          <div class="stat-item"><div class="stat-number">15+</div><div class="stat-label">Anos de Atuação</div></div>
          <div class="stat-item"><div class="stat-number">5.000+</div><div class="stat-label">Vidas Impactadas</div></div>
          <div class="stat-item"><div class="stat-number">200+</div><div class="stat-label">Voluntários Ativos</div></div>
          <div class="stat-item"><div class="stat-number">50+</div><div class="stat-label">Comunidades Atendidas</div></div>
        </div>
      </div>
    </section>

    <section class="values-section">
      <div class="container">
        <h2 class="text-center">Nossos Valores</h2>
        <div class="values-grid">
          <div class="value-card card-yellow">
            <div class="value-icon">🎯</div>
            <h3 class="value-title">Missão</h3>
            <p class="value-description">Promover o desenvolvimento social através de ações voluntárias, educação de qualidade e projetos sustentáveis que geram impacto real nas comunidades.</p>
          </div>
          <div class="value-card card-green">
            <div class="value-icon">🌟</div>
            <h3 class="value-title">Visão</h3>
            <p class="value-description">Ser referência nacional em transformação social até 2030, impactando positivamente 1 milhão de vidas e construindo comunidades mais justas e sustentáveis.</p>
          </div>
          <div class="value-card card-green">
            <div class="value-icon">💙</div>
            <h3 class="value-title">Valores</h3>
            <p class="value-description">Solidariedade, Transparência, Sustentabilidade, Compromisso Social, Ética e Respeito à Diversidade guiam todas as nossas ações.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="projects-section">
      <div class="container">
        <h2 class="text-center">Projetos em Destaque</h2>
        <p class="text-center subtitle">Conheça algumas de nossas principais iniciativas</p>
        <div class="projects-grid">
          <article class="project-card">
            <h3 class="project-title">Educação para Todos</h3>
            <img src="image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2UwZjBmZiIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjIwMCIgcj0iNDAiIGZpbGw9IiMyRTg2QUIiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIxODAiIHI9IjM1IiBmaWxsPSIjRjlBODI2Ii8+PGNpcmNsZSBjeD0iNDUwIiBjeT0iMjIwIiByPSI0NSIgZmlsbD0iIzZBOTk0RSIvPjx0ZXh0IHg9IjMwMCIgeT0iMzIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkVkdWNhw6fDo28gcGFyYSBUb2RvczwvdGV4dD48L3N2Zz4=" alt="Crianças em atividade educacional" class="project-image">
            <p class="project-description">Programa de reforço escolar e alfabetização para crianças e adolescentes em situação de vulnerabilidade social.</p>
            <div class="project-tags">
              <span class="tag tag-educacao">Educação</span>
              <span class="tag tag-infantil">Infantil</span>
            </div>
            <a href="#projetos/educacao" class="btn-project">Saiba Mais</a>
          </article>
          <article class="project-card">
            <h3 class="project-title">Alimentando Esperanças</h3>
            <img src="image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2ZmZjhlMSIvPjxyZWN0IHg9IjIwMCIgeT0iMTAwIiB3aWR0aD0iMjAwIiBoZWlnaHQ9IjE1MCIgcng9IjEwIiBmaWxsPSIjRjlBODI2Ii8+PGNpcmNsZSBjeD0iMjUwIiBjeT0iMTUwIiByPSIyMCIgZmlsbD0iIzZBOTk0RSIvPjxjaXJjbGUgY3g9IjM1MCIgY3k9IjE4MCIgcj0iMjUiIGZpbGw9IiMyRTg2QUIiLz48dGV4dCB4PSIzMDAiIHk9IjMyMCIgZm9udC1mYW1pbHk9IkFyaWFsIiBmb250LXNpemU9IjI0IiBmaWxsPSIjMzMzIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5BbGltZW50YW5kbyBFc3BlcmFuw6dhczwvdGV4dD48L3N2Zz4=" alt="Distribuição de cestas básicas" class="project-image">
            <p class="project-description">Distribuição mensal de cestas básicas e orientação nutricional para famílias em situação de insegurança alimentar.</p>
            <div class="project-tags">
              <span class="tag tag-alimentacao">Alimentação</span>
              <span class="tag tag-familias">Famílias</span>
            </div>
            <a href="#projetos/alimentacao" class="btn-project">Saiba Mais</a>
          </article>
        </div>
        <div class="text-center mt-4">
          <a href="#projetos" class="btn btn-outline btn-large">Ver Todos os Projetos</a>
        </div>
      </div>
    </section>

    <section class="help-section">
      <div class="container">
        <h2 class="text-center">Como Você Pode Ajudar</h2>
        <div class="help-grid">
          <div class="help-item">
            <div class="help-icon">🤝</div>
            <h3 class="help-title">Seja Voluntário</h3>
            <p class="help-description">Doe seu tempo e talento para nossas causas. Temos oportunidades para todas as habilidades.</p>
            <a href="#cadastro" class="btn-help">Cadastrar</a>
          </div>
          <div class="help-item">
            <div class="help-icon">💝</div>
            <h3 class="help-title">Faça uma Doação</h3>
            <p class="help-description">Sua contribuição financeira transforma vidas. Qualquer valor faz a diferença.</p>
            <a href="#projetos/doacoes" class="btn-help">Doar Agora</a>
          </div>
          <div class="help-item">
            <div class="help-icon">📢</div>
            <h3 class="help-title">Divulgue</h3>
            <p class="help-description">Compartilhe nosso trabalho nas redes sociais e ajude a expandir nosso impacto.</p>
            <button class="btn btn-outline">Compartilhar</button>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 Instituto Futuro Solidário. Todos os direitos reservados.</p>
        <p>CNPJ: 12.345.678/0001-90 • Organização da Sociedade Civil de Interesse Público</p>
      </div>
    </footer>
  `,

  cadastro: () => `
    <div class="container">
      <div class="card card-yellow" style="max-width: 700px; margin: var(--space-5) auto;">
        <div class="card-body">
          <h2 class="text-center">Cadastro de Voluntário</h2>
          <p class="text-center">Preencha o formulário abaixo para se juntar à nossa rede de solidariedade.</p>
          <form id="volunteerForm" class="form-container" novalidate>
            <div class="form-group">
              <label for="nome">Nome Completo *</label>
              <input type="text" id="nome" name="nome" required>
              <span class="error-message" id="error-nome"></span>
            </div>
            <div class="form-group">
              <label for="email">E-mail *</label>
              <input type="email" id="email" name="email" required>
              <span class="error-message" id="error-email"></span>
            </div>
            <div class="form-group">
              <label for="telefone">Telefone (opcional)</label>
              <input type="tel" id="telefone" name="telefone">
            </div>
            <div class="form-group">
              <label for="interesse">Área de Interesse *</label>
              <select id="interesse" name="interesse" required>
                <option value="">Selecione...</option>
                <option value="educacao">Educação</option>
                <option value="alimentacao">Segurança Alimentar</option>
                <option value="eventos">Organização de Eventos</option>
                <option value="administracao">Apoio Administrativo</option>
                <option value="outro">Outro</option>
              </select>
              <span class="error-message" id="error-interesse"></span>
            </div>
            <div class="form-group">
              <label for="disponibilidade">Disponibilidade Semanal *</label>
              <select id="disponibilidade" name="disponibilidade" required>
                <option value="">Selecione...</option>
                <option value="manha">Manhã</option>
                <option value="tarde">Tarde</option>
                <option value="noite">Noite</option>
                <option value="fds">Finais de semana</option>
              </select>
              <span class="error-message" id="error-disponibilidade"></span>
            </div>
            <div class="form-group">
              <label for="mensagem">Mensagem (opcional)</label>
              <textarea id="mensagem" name="mensagem" rows="4"></textarea>
            </div>
            <div class="form-actions">
              <button type="submit" class="btn btn-secondary btn-large">Enviar Cadastro</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  `,

  projetos: () => `
    <div class="container">
      <h2 class="text-center">Nossos Projetos Sociais</h2>
      <article class="card card-yellow mb-5">
        <div class="card-body">
          <h3>Voluntariado Comunitário</h3>
          <img src="image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2YwZjhmZiIvPjxjaXJjbGUgY3g9IjIwMCIgY3k9IjIwMCIgcj0iNTAiIGZpbGw9IiMyRTg2QUIiLz48Y2lyY2xlIGN4PSI0MDAiIGN5PSIyMDAiIHI9IjUwIiBmaWxsPSIjRjlBODI2Ii8+PHBhdGggZD0iTTI1MCAyMDAgTDM1MCAyMDAiIHN0cm9rZT0iIzZBOTk0RSIgc3Ryb2tlLXdpZHRoPSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHRleHQgeD0iMzAwIiB5PSIzMjAiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIyNCIgZmlsbD0iIzMzMyIgdGV4dC1hbmNob3I9Im1pZGRsZSI+Vm9sdW50YXJpYWRvIENvbXVuaXRhcmlvPC90ZXh0Pjwvc3ZnPg==" alt="Grupo de voluntários" class="card-image">
          <p>Participe de nossas ações semanais! Oferecemos apoio educacional, distribuição de alimentos e oficinas de arte.</p>
          <a href="#cadastro" class="btn btn-secondary">Inscreva-se como voluntário</a>
        </div>
      </article>
      <article class="card card-green mb-5">
        <div class="card-body">
          <h3>Como Doar</h3>
          <img src="image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2Y1ZjVmNSIvPjxyZWN0IHg9IjI1MCIgeT0iMTIwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEyMCIgcng9IjgiIGZpbGw9IiMyRTg2QUIiLz48cmVjdCB4PSIyNjAiIHk9IjEzMCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjIwIiBmaWxsPSIjRjlBODI2Ii8+PHJlY3QgeD0iMjYwIiB5PSIxNjAiIHdpZHRoPSI4MCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzZBOTk0RSIvPjx0ZXh0IHg9IjMwMCIgeT0iMzIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkRvYcOnw7VlczwvdGV4dD48L3N2Zz4=" alt="Caixa com itens" class="card-image">
          <p>Qualquer contribuição faz a diferença! Aceitamos doações em dinheiro, roupas, alimentos não perecíveis e materiais escolares.</p>
          <p><strong>Chave PIX:</strong> doacoes@futurosolidario.org.br</p>
          <a href="#" class="btn btn-primary">Doar Agora</a>
        </div>
      </article>
      <article class="card card-yellow mb-5">
        <div class="card-body">
          <h3>Eventos Comunitários</h3>
          <img src="image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNDAwIj48cmVjdCB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgZmlsbD0iI2U4ZjVlOSIvPjxjaXJjbGUgY3g9IjE1MCIgY3k9IjIwMCIgcj0iMzAiIGZpbGw9IiNGOUE4MjYiLz48Y2lyY2xlIGN4PSIzMDAiIGN5PSIxODAiIHI9IjM1IiBmaWxsPSIjMkU4NkFCIi8+PGNpcmNsZSBjeD0iNDUwIiBjeT0iMjIwIiByPSI0MCIgZmlsbD0iIzZBOTk0RSIvPjx0ZXh0IHg9IjMwMCIgeT0iMzIwIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiMzMzMiIHRleHQtYW5jaG9yPSJtaWRkbGUiPkV2ZW50b3MgQ29tdW5pdMOhcmlvczwvdGV4dD48L3N2Zz4=" alt="Famílias em evento" class="card-image">
          <p>Organizamos feiras de saúde, mutirões de limpeza e festivais culturais para fortalecer os laços comunitários.</p>
          <a href="#" class="btn btn-outline">Ver Próximos Eventos</a>
        </div>
      </article>
    </div>
  `
