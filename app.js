// ── Initial Data (from planilha Controle de Atividades) ──────────────────────

const INITIAL_ATIVIDADES = [
  { empresa: 'PRT', setor: 'Financeiro', atividade: 'Planejamento ACC', responsavel: 'João Victor', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Marketing', atividade: 'Site (novas atividades)', responsavel: '', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Vendas', atividade: 'Emissão de Proforma + Sales Order', responsavel: 'Edney', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Vendas', atividade: 'Enviar Ofertas para os Clientes', responsavel: 'Edney', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Vendas', atividade: 'DocuSign', responsavel: 'Edney', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Vendas', atividade: 'Master Clientes & SRM', responsavel: 'Edney', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Compras', atividade: 'Copilar os dados do Pedido para Detalhamento Interno', responsavel: 'Hannan', apoio: '', periodo: '', observacao: 'Cuidados com os SKUs repetidos.' },
  { empresa: 'PRT', setor: 'Regulatorio', atividade: 'Etiquetas', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: 'De acordo com modelo de cada pais' },
  { empresa: 'PRT', setor: 'Operacional Comex', atividade: 'Desembaraço Bélgica e UK', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: 'Deny Cargo, Nuno' },
  { empresa: 'PRT', setor: 'Operacional Comex', atividade: 'Financeiro Deny Cargo', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Operacional Comex', atividade: 'Desembaraço USA', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: 'Express Customs' },
  { empresa: 'PRT', setor: 'Logistica', atividade: 'Delivery Interno Internacional (Europa e USA)', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Logistica', atividade: 'Definição do Booking', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Fiscal', atividade: 'Emissão de NF PRT Omie', responsavel: 'Hannan', apoio: '', periodo: '', observacao: 'Emite o espelho e gera a NF.' },
  { empresa: 'PRT', setor: 'Financeiro', atividade: 'Nota de Debito', responsavel: 'João Victor', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Financeiro', atividade: 'NFs de despesas / Cobrança Serviços em Geral', responsavel: 'João Victor', apoio: '', periodo: '', observacao: 'Armazem, Porto, Agente de Cargas, Despachantes.' },
  { empresa: 'PRT', setor: 'RH', atividade: 'Banco de Horas Funcionarios PRT', responsavel: 'Janine', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'RH', atividade: 'Caju', responsavel: 'Janine', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Compras', atividade: 'Compras - efetuar compras com os fornecedores', responsavel: 'Hannan', apoio: 'Ronny', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Compras', atividade: 'Compras - informar para o BPO o provisionamento das despesas', responsavel: 'João Victor', apoio: '', periodo: '', observacao: 'BPO recebe a informação e lança no sistema Omie' },
  { empresa: 'PRT', setor: 'Comex', atividade: 'Juntada de documentos para emissão da DUE', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: 'NF, xml, invoice DUE, relação chave de NF' },
  { empresa: 'PRT', setor: 'Comex', atividade: 'Envio de NFs para a transportadora', responsavel: 'Hannan', apoio: '', periodo: '', observacao: 'Exemplo 1500 transportes' },
  { empresa: 'PRT', setor: 'Comex', atividade: 'Conferencia do Draft do BL - Dry', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Fiscal', atividade: 'Emissão de NF PRT (Espelho)', responsavel: 'Hannan', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Compras', atividade: 'Colocar os Oks de compras no Detalhamento Interno', responsavel: 'João Victor', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Compras', atividade: 'Lançar NF de compra no Detalhamento Interno', responsavel: 'João Victor', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Compras', atividade: 'Lançar NF de compra no OMIE', responsavel: 'João Victor', apoio: '', periodo: '', observacao: 'Associar produto e ajustar quantidade (de acordo com o padrão PRT)' },
  { empresa: 'PRT', setor: 'Compras', atividade: 'Lançar no relatorio NF de compra na Consystem', responsavel: 'João Victor', apoio: '', periodo: '', observacao: 'Lançar na planilha modelo definido' },
  { empresa: 'PRT', setor: 'Logistica', atividade: 'Acompanhamento de recebimento de carga', responsavel: 'Hannan', apoio: 'Rony', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Compras', atividade: 'Validação das datas de validades dos produtos sendo recebidos', responsavel: 'Hannan', apoio: 'Rony', periodo: '', observacao: 'Validade aprovada no grupo, registrar no Detalhamento.' },
  { empresa: 'PRT', setor: 'Logistica', atividade: 'Pre-Lista (Pre-Lista e Lista Final)', responsavel: 'João Victor', apoio: '', periodo: '', observacao: 'Pré-Lista com validade' },
  { empresa: 'PRT', setor: 'Logistica', atividade: 'Inventário Mensal Físico', responsavel: 'Hannan', apoio: '', periodo: '', observacao: 'Fazer conferencia VAZ (Fisico) x PRT (Planilha)' },
  { empresa: 'PRT', setor: 'Compras', atividade: 'Cotações', responsavel: 'Edilaine', apoio: '', periodo: '', observacao: 'Cotações com os fornecedores' },
  { empresa: 'PRT', setor: 'Logistica', atividade: 'Cotar e Fechar Booking', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Cadastro', atividade: 'Cadastro de Produtos Planilha Master Cadastro', responsavel: 'Edilaine', apoio: '', periodo: '', observacao: 'Master, Bling.' },
  { empresa: 'PRT', setor: 'Cadastro', atividade: 'Cadastro de Produtos Omie', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: 'Ideal cadastrar após a compra' },
  { empresa: 'PRT', setor: 'Cadastro', atividade: 'Lançar Master Cotações', responsavel: 'Edilaine', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Comex', atividade: 'Emissão de Documentos', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: 'Invoice, Packing List, Cert. Origem, Free Sale Certificate, entre outros.' },
  { empresa: 'PRT', setor: 'Operacional Comex', atividade: 'Memorando de Exportação', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Operacional Comex', atividade: 'Envio NF de Compra para Consystem', responsavel: 'João Victor', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Operacional Comex', atividade: 'Documento para Consystem: Relatorio de Faturamento e envio NF', responsavel: 'Hannan', apoio: '', periodo: '', observacao: 'NF de compra o JV envia para a Carla.' },
  { empresa: 'PRT', setor: 'Operacional Comex', atividade: 'Envio NF de Despesas para Consystem', responsavel: 'Janine', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Cadastro', atividade: 'Master Fotos', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: 'Incluir novos produtos e Manutenção' },
  { empresa: 'PRT', setor: 'Fiscal', atividade: 'Conferencia de NFs', responsavel: 'Hannan', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Fiscal', atividade: 'SPED / Obrigações Fiscais', responsavel: 'João Victor', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Financeiro', atividade: 'Conciliação Bancária', responsavel: 'João Victor', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Logistica', atividade: 'Controle de Estoque', responsavel: 'Hannan', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Logistica', atividade: 'Rastreamento de Cargas', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Vendas', atividade: 'Follow-up de Pedidos', responsavel: 'Edney', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Qualidade', atividade: 'Controle de Qualidade de Produtos', responsavel: 'Hannan', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Projetos', atividade: 'Gestão de Projetos Internos', responsavel: 'Ricardo', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Juridico', atividade: 'Revisão de Contratos', responsavel: '', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Vendas', atividade: 'Relatório de Vendas Mensal', responsavel: 'Edney', apoio: '', periodo: 'Mensal', observacao: '' },
  { empresa: 'PRT', setor: 'Comex', atividade: 'Acompanhamento de Embarques', responsavel: 'Nathalia', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Financeiro', atividade: 'Controle de Câmbio', responsavel: 'João Victor', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Marketing', atividade: 'Gestão de Redes Sociais', responsavel: '', apoio: '', periodo: '', observacao: '' },
  { empresa: 'PRT', setor: 'Marketing', atividade: 'Material Gráfico e Apresentações', responsavel: '', apoio: '', periodo: '', observacao: '' },
];

const INITIAL_COLABORADORES = [
  { nome: 'João Victor', setor: 'Financeiro', cargo: 'Analista Financeiro', email: '' },
  { nome: 'Edney', setor: 'Vendas', cargo: 'Executivo de Vendas', email: '' },
  { nome: 'Hannan', setor: 'Compras', cargo: 'Analista de Compras', email: '' },
  { nome: 'Nathalia', setor: 'Operacional Comex', cargo: 'Analista Comex', email: '' },
  { nome: 'Janine', setor: 'RH', cargo: 'Analista de RH', email: '' },
  { nome: 'Edilaine', setor: 'Compras', cargo: 'Analista de Compras', email: '' },
  { nome: 'Ricardo', setor: 'Projetos', cargo: 'Gerente de Projetos', email: 'import@paranatrading.com.br' },
  { nome: 'Ronny', setor: 'Logistica', cargo: 'Auxiliar Logístico', email: '' },
];

const AVATAR_COLORS = [
  '#1a56db','#7e3af2','#057a55','#c81e1e','#c27803',
  '#0694a2','#e74694','#6875f5','#31c48d','#f98080',
];

// ── State & Storage ───────────────────────────────────────────────────────────

function loadData() {
  const a = localStorage.getItem('prt_atividades');
  const c = localStorage.getItem('prt_colaboradores');
  if (!a) {
    const withIds = INITIAL_ATIVIDADES.map((x, i) => ({ id: i + 1, ...x }));
    localStorage.setItem('prt_atividades', JSON.stringify(withIds));
  }
  if (!c) {
    const withIds = INITIAL_COLABORADORES.map((x, i) => ({ id: i + 1, ...x }));
    localStorage.setItem('prt_colaboradores', JSON.stringify(withIds));
  }
}

function getAtividades() {
  return JSON.parse(localStorage.getItem('prt_atividades') || '[]');
}

function saveAtividadesData(data) {
  localStorage.setItem('prt_atividades', JSON.stringify(data));
}

function getColaboradores() {
  return JSON.parse(localStorage.getItem('prt_colaboradores') || '[]');
}

function saveColaboradoresData(data) {
  localStorage.setItem('prt_colaboradores', JSON.stringify(data));
}

function nextId(arr) {
  return arr.length ? Math.max(...arr.map(x => x.id)) + 1 : 1;
}

// ── Helpers ───────────────────────────────────────────────────────────────────

const SETOR_COLORS = {
  'Financeiro': '#1a56db', 'Vendas': '#057a55', 'Compras': '#7e3af2',
  'Logistica': '#c27803', 'Comex': '#0694a2', 'Operacional Comex': '#0694a2',
  'Fiscal': '#c81e1e', 'RH': '#e74694', 'Cadastro': '#6875f5',
  'Marketing': '#31c48d', 'Regulatorio': '#f98080', 'Qualidade': '#84cc16',
  'Projetos': '#f59e0b', 'Juridico': '#6b7280',
};

function setorColor(setor) {
  return SETOR_COLORS[setor] || '#64748b';
}

function avatarColor(name) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = name.charCodeAt(i) + ((h << 5) - h);
  return AVATAR_COLORS[Math.abs(h) % AVATAR_COLORS.length];
}

function initials(name) {
  if (!name) return '?';
  const parts = name.trim().split(' ');
  return parts.length >= 2
    ? (parts[0][0] + parts[parts.length - 1][0]).toUpperCase()
    : name.slice(0, 2).toUpperCase();
}

function toast(msg, type = '') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = 'toast show' + (type ? ' ' + type : '');
  clearTimeout(el._t);
  el._t = setTimeout(() => { el.className = 'toast'; }, 2800);
}

// ── Navigation ────────────────────────────────────────────────────────────────

document.querySelectorAll('.nav-item').forEach(el => {
  el.addEventListener('click', e => {
    e.preventDefault();
    const view = el.dataset.view;
    document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
    el.classList.add('active');
    document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
    document.getElementById('view-' + view).style.display = '';
    if (view === 'atividades') renderAtividades();
    if (view === 'colaboradores') renderColaboradores();
    if (view === 'dashboard') renderDashboard();
  });
});

// ── Atividades ────────────────────────────────────────────────────────────────

function populateFilters() {
  const atividades = getAtividades();
  const setores = [...new Set(atividades.map(a => a.setor).filter(Boolean))].sort();
  const responsaveis = [...new Set(atividades.map(a => a.responsavel).filter(Boolean))].sort();

  const selSetor = document.getElementById('filter-setor');
  const selResp = document.getElementById('filter-responsavel');
  const curSetor = selSetor.value;
  const curResp = selResp.value;

  selSetor.innerHTML = '<option value="">Todos os Setores</option>' +
    setores.map(s => `<option value="${s}"${s === curSetor ? ' selected' : ''}>${s}</option>`).join('');
  selResp.innerHTML = '<option value="">Todos os Responsáveis</option>' +
    responsaveis.map(r => `<option value="${r}"${r === curResp ? ' selected' : ''}>${r}</option>`).join('');

  const listSetores = document.getElementById('list-setores');
  if (listSetores) listSetores.innerHTML = setores.map(s => `<option value="${s}">`).join('');
  const listSetoresC = document.getElementById('list-setores-colab');
  if (listSetoresC) listSetoresC.innerHTML = setores.map(s => `<option value="${s}">`).join('');
}

function populateColabList() {
  const colabs = getColaboradores().map(c => c.nome).filter(Boolean).sort();
  ['list-colabs', 'list-colabs-apoio'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.innerHTML = colabs.map(c => `<option value="${c}">`).join('');
  });
}

function renderAtividades() {
  populateFilters();
  const search = (document.getElementById('search-input').value || '').toLowerCase();
  const setor = document.getElementById('filter-setor').value;
  const resp = document.getElementById('filter-responsavel').value;

  let data = getAtividades().filter(a => {
    if (setor && a.setor !== setor) return false;
    if (resp && a.responsavel !== resp) return false;
    if (search) {
      const hay = (a.atividade + a.responsavel + a.setor + a.observacao).toLowerCase();
      if (!hay.includes(search)) return false;
    }
    return true;
  });

  const body = document.getElementById('atividades-body');
  const empty = document.getElementById('empty-state');
  document.getElementById('filter-count').textContent =
    data.length + ' atividade' + (data.length !== 1 ? 's' : '');

  if (!data.length) {
    body.innerHTML = '';
    empty.style.display = '';
    return;
  }
  empty.style.display = 'none';

  body.innerHTML = data.map((a, i) => `
    <tr>
      <td style="color:var(--text-muted);font-size:13px">${a.id}</td>
      <td><span class="badge" style="background:${setorColor('PRT')}18;color:${setorColor('PRT')}">${a.empresa || 'PRT'}</span></td>
      <td><span class="badge" style="background:${setorColor(a.setor)}18;color:${setorColor(a.setor)}">${a.setor}</span></td>
      <td class="td-atividade">
        <div>${escHtml(a.atividade)}</div>
        ${a.observacao ? `<div class="td-obs">${escHtml(a.observacao)}</div>` : ''}
      </td>
      <td>
        ${a.responsavel ? `<span style="display:flex;align-items:center;gap:6px">
          <span style="width:26px;height:26px;border-radius:50%;background:${avatarColor(a.responsavel)};color:#fff;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;flex-shrink:0">${initials(a.responsavel)}</span>
          ${escHtml(a.responsavel)}
        </span>` : '<span style="color:var(--text-muted)">—</span>'}
      </td>
      <td>${a.apoio ? escHtml(a.apoio) : '<span style="color:var(--text-muted)">—</span>'}</td>
      <td>${a.periodo ? escHtml(a.periodo) : '<span style="color:var(--text-muted)">—</span>'}</td>
      <td>
        <div class="actions-cell">
          <button class="btn-icon" title="Editar" onclick="editAtividade(${a.id})">
            <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn-icon delete" title="Excluir" onclick="confirmDeleteAtividade(${a.id})">
            <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </td>
    </tr>
  `).join('');
}

function escHtml(str) {
  return String(str || '')
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// ── Atividade Modal ───────────────────────────────────────────────────────────

function openAtividadeModal(atividade = null) {
  populateFilters();
  populateColabList();
  document.getElementById('modal-atividade-title').textContent =
    atividade ? 'Editar Atividade' : 'Nova Atividade';
  document.getElementById('ativ-id').value = atividade ? atividade.id : '';
  document.getElementById('ativ-empresa').value = atividade ? atividade.empresa : 'PRT';
  document.getElementById('ativ-setor').value = atividade ? atividade.setor : '';
  document.getElementById('ativ-descricao').value = atividade ? atividade.atividade : '';
  document.getElementById('ativ-responsavel').value = atividade ? atividade.responsavel : '';
  document.getElementById('ativ-apoio').value = atividade ? atividade.apoio : '';
  document.getElementById('ativ-periodo').value = atividade ? atividade.periodo : '';
  document.getElementById('ativ-observacao').value = atividade ? atividade.observacao : '';
  document.getElementById('modal-atividade').style.display = 'flex';
}

function editAtividade(id) {
  const a = getAtividades().find(x => x.id === id);
  if (a) openAtividadeModal(a);
}

function saveAtividade(e) {
  e.preventDefault();
  const data = getAtividades();
  const id = document.getElementById('ativ-id').value;
  const obj = {
    empresa: document.getElementById('ativ-empresa').value.trim(),
    setor: document.getElementById('ativ-setor').value.trim(),
    atividade: document.getElementById('ativ-descricao').value.trim(),
    responsavel: document.getElementById('ativ-responsavel').value.trim(),
    apoio: document.getElementById('ativ-apoio').value.trim(),
    periodo: document.getElementById('ativ-periodo').value.trim(),
    observacao: document.getElementById('ativ-observacao').value.trim(),
  };
  if (id) {
    const idx = data.findIndex(x => x.id === parseInt(id));
    if (idx !== -1) data[idx] = { ...data[idx], ...obj };
    toast('Atividade atualizada!', 'success');
  } else {
    obj.id = nextId(data);
    data.push(obj);
    toast('Atividade cadastrada!', 'success');
  }
  saveAtividadesData(data);
  closeModal('modal-atividade');
  renderAtividades();
}

function confirmDeleteAtividade(id) {
  const a = getAtividades().find(x => x.id === id);
  document.getElementById('delete-msg').textContent =
    `Deseja excluir a atividade "${a ? a.atividade : ''}"? Esta ação não pode ser desfeita.`;
  document.getElementById('confirm-delete-btn').onclick = () => {
    const data = getAtividades().filter(x => x.id !== id);
    saveAtividadesData(data);
    closeModal('modal-delete');
    renderAtividades();
    toast('Atividade excluída.', '');
  };
  document.getElementById('modal-delete').style.display = 'flex';
}

// ── Colaboradores ─────────────────────────────────────────────────────────────

function renderColaboradores() {
  populateFilters();
  const colabs = getColaboradores();
  const atividades = getAtividades();

  const grid = document.getElementById('colabs-grid');
  if (!colabs.length) {
    grid.innerHTML = '<p style="color:var(--text-muted)">Nenhum colaborador cadastrado.</p>';
    return;
  }

  grid.innerHTML = colabs.map(c => {
    const count = atividades.filter(a => a.responsavel === c.nome).length;
    const color = avatarColor(c.nome);
    return `
      <div class="colab-card">
        <div style="display:flex;align-items:center;gap:14px">
          <div class="colab-avatar" style="background:${color}">${initials(c.nome)}</div>
          <div class="colab-info">
            <div class="colab-name">${escHtml(c.nome)}</div>
            <div class="colab-meta">${escHtml(c.setor)}${c.cargo ? ' · ' + escHtml(c.cargo) : ''}</div>
            ${c.email ? `<div class="colab-meta">${escHtml(c.email)}</div>` : ''}
          </div>
        </div>
        <div style="display:flex;align-items:center;justify-content:space-between;font-size:13px">
          <span style="color:var(--text-muted)">${count} atividade${count !== 1 ? 's' : ''} como responsável</span>
        </div>
        <div class="colab-actions">
          <button class="btn-icon" title="Editar" onclick="editColaborador(${c.id})">
            <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn-icon delete" title="Excluir" onclick="confirmDeleteColaborador(${c.id})">
            <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg>
          </button>
        </div>
      </div>
    `;
  }).join('');
}

function openColaboradorModal(colaborador = null) {
  populateFilters();
  document.getElementById('modal-colaborador-title').textContent =
    colaborador ? 'Editar Colaborador' : 'Novo Colaborador';
  document.getElementById('colab-id').value = colaborador ? colaborador.id : '';
  document.getElementById('colab-nome').value = colaborador ? colaborador.nome : '';
  document.getElementById('colab-setor').value = colaborador ? colaborador.setor : '';
  document.getElementById('colab-cargo').value = colaborador ? colaborador.cargo : '';
  document.getElementById('colab-email').value = colaborador ? colaborador.email : '';
  document.getElementById('modal-colaborador').style.display = 'flex';
}

function editColaborador(id) {
  const c = getColaboradores().find(x => x.id === id);
  if (c) openColaboradorModal(c);
}

function saveColaborador(e) {
  e.preventDefault();
  const data = getColaboradores();
  const id = document.getElementById('colab-id').value;
  const obj = {
    nome: document.getElementById('colab-nome').value.trim(),
    setor: document.getElementById('colab-setor').value.trim(),
    cargo: document.getElementById('colab-cargo').value.trim(),
    email: document.getElementById('colab-email').value.trim(),
  };
  if (id) {
    const idx = data.findIndex(x => x.id === parseInt(id));
    if (idx !== -1) data[idx] = { ...data[idx], ...obj };
    toast('Colaborador atualizado!', 'success');
  } else {
    obj.id = nextId(data);
    data.push(obj);
    toast('Colaborador cadastrado!', 'success');
  }
  saveColaboradoresData(data);
  closeModal('modal-colaborador');
  renderColaboradores();
}

function confirmDeleteColaborador(id) {
  const c = getColaboradores().find(x => x.id === id);
  document.getElementById('delete-msg').textContent =
    `Deseja excluir o colaborador "${c ? c.nome : ''}"? Esta ação não pode ser desfeita.`;
  document.getElementById('confirm-delete-btn').onclick = () => {
    const data = getColaboradores().filter(x => x.id !== id);
    saveColaboradoresData(data);
    closeModal('modal-delete');
    renderColaboradores();
    toast('Colaborador excluído.', '');
  };
  document.getElementById('modal-delete').style.display = 'flex';
}

// ── Dashboard ─────────────────────────────────────────────────────────────────

function renderDashboard() {
  const atividades = getAtividades();
  const colabs = getColaboradores();

  const setorMap = {};
  const respMap = {};
  atividades.forEach(a => {
    setorMap[a.setor] = (setorMap[a.setor] || 0) + 1;
    if (a.responsavel) respMap[a.responsavel] = (respMap[a.responsavel] || 0) + 1;
  });

  document.getElementById('dashboard-stats').innerHTML = `
    <div class="stat-card">
      <div class="stat-label">Total de Atividades</div>
      <div class="stat-value">${atividades.length}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Colaboradores</div>
      <div class="stat-value">${colabs.length}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Setores</div>
      <div class="stat-value">${Object.keys(setorMap).length}</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Sem Responsável</div>
      <div class="stat-value">${atividades.filter(a => !a.responsavel).length}</div>
    </div>
  `;

  renderBarChart('chart-setor', setorMap, true);
  renderBarChart('chart-responsavel', respMap, false);
}

function renderBarChart(containerId, map, useSetorColor) {
  const entries = Object.entries(map).sort((a, b) => b[1] - a[1]);
  const max = entries[0]?.[1] || 1;
  const container = document.getElementById(containerId);
  container.innerHTML = entries.map(([label, count]) => {
    const color = useSetorColor ? setorColor(label) : avatarColor(label);
    const pct = (count / max * 100).toFixed(1);
    return `
      <div class="bar-row">
        <div class="bar-label" title="${escHtml(label)}">${escHtml(label)}</div>
        <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${color}"></div></div>
        <div class="bar-count">${count}</div>
      </div>
    `;
  }).join('');
}

// ── Modal Utils ───────────────────────────────────────────────────────────────

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

function closeModalOnOverlay(e, id) {
  if (e.target === document.getElementById(id)) closeModal(id);
}

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    ['modal-atividade','modal-colaborador','modal-delete'].forEach(closeModal);
  }
});

// ── Boot ──────────────────────────────────────────────────────────────────────

loadData();
renderAtividades();
