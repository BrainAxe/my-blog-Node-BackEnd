let config = {
  port: 1337,
  host: "localhost",
  dbUrl: "mongodb://localhost:27017/t3ch-savvy",
  saltWorkFactor: 10,
  accessTokenTtl: '15m',
  refreshTokenTtl: '1y',
  privateKey: `-----BEGIN RSA PRIVATE KEY-----
  MIICXAIBAAKBgQDBbUorCD6qP9Zv5Jb7e9Lt8DZ4LI/YOGr73EJRN7SthMQiHDnZ
  j57h170jA8eyRNXqRTZnVSoye7Lw8EHTgVowoV1vu4VpDUmOtYwDyZorDMJUJHem
  QPNZ2SZ3L7E7/8DlGsy7O/F0S0yG2dsId0tOEN8sYMfSz4/OqPhybq+i0wIDAQAB
  AoGAHBj0HSwlbjW3wKlEBWQHT+kFAI/4lUAcyllEiOe+pzYSB6JyBNiIC+Z64ws5
  hvvY1x8WuAv3BT5S0A0WgtLXdthHQJ+72qJejGqMKQhoQrBbgPMKpRCUt5dS1zYQ
  bapRUysnsbgK6Rc2oyTSKnE7hvot0TsHBA0WwD7+hVwIu4ECQQDnTNI08miXpWz0
  wzKcphABMDQfNYyZEFQYJL2kF1qbtJu2OLm6tuys6/p4AUlWE52v1shs56oGT3Dr
  zb6jw/9fAkEA1hUb1PmNoUepCbJZAy8umuSyxo9T3kQKKbUt53g4cWm4D/Tli6Uz
  qZIt2VFgYgZrYp/2bkaVh5AI0ySPzEM1DQJAGkv+nixtPch+AbnrmCm9KhVr55xz
  9rcHiJMsyGorUAaRqX77hsHjWKmfmWM0Dkg+pk46DT+tcfg4M2b55K6U6wJAEPn5
  jAkCFzEEkZVIA72hF31dQ+unve9tUuNgMYPSDgRRKUrFTS6biy3hXuNaHkveBiMj
  Opl0UBy25m92y77knQJBAMw/MgmSUb0gKRDiHIxJNTeovDYEIBgGbrNfqrjbJoLI
  K16osp2i5AZPpm3nEfMjMpqa1ZLLz1Mw8sTz62Hm+ag=
  -----END RSA PRIVATE KEY-----`
}

module.exports = config;
