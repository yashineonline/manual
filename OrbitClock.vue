/* Logical manual index and continuous chapter reader */

.manual-logical-index {
  width: min(1180px, 100%);
  margin: 0 auto;
}

.manual-logical-heading {
  align-items: end;
}

.manual-logical-heading p {
  max-width: 720px;
  margin: 14px 0 0;
  color: var(--ink-soft);
  line-height: 1.6;
}

.manual-reading-suggestion {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-bottom: 26px;
  padding: clamp(22px, 4vw, 36px);
  border: 1px solid color-mix(in srgb, var(--gold) 42%, transparent);
  border-radius: 24px 24px 70px 24px;
  background:
    radial-gradient(
      circle at top right,
      color-mix(in srgb, var(--gold) 12%, transparent),
      transparent 44%
    ),
    color-mix(in srgb, var(--paper) 88%, transparent);
  box-shadow: var(--shadow);
}

.manual-reading-suggestion h2 {
  margin: 8px 0 5px;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.45rem, 3vw, 2.4rem);
  font-weight: 500;
}

.manual-reading-suggestion p {
  margin: 0 0 10px;
  color: var(--ink-soft);
  font-size: 1rem;
}

.manual-reading-suggestion small {
  color: var(--gold);
  font-weight: 800;
  letter-spacing: 0.06em;
}

.manual-reading-suggestion-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 9px;
}

.manual-chapter-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
}

.manual-chapter-card {
  min-width: 0;
  display: flex;
  flex-direction: column;
  padding: 22px;
  border: 1px solid var(--line);
  border-radius: 22px 22px 62px 22px;
  background: color-mix(in srgb, var(--paper) 78%, transparent);
  box-shadow: 0 14px 35px rgba(36, 43, 35, 0.07);
}

.manual-chapter-card > header {
  display: grid;
  grid-template-columns: 42px 1fr;
  gap: 13px;
  padding-bottom: 17px;
  border-bottom: 1px solid var(--line);
}

.manual-chapter-card > header > span {
  color: var(--gold);
  font-size: 0.7rem;
  font-weight: 900;
  letter-spacing: 0.14em;
}

.manual-chapter-card h2 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: 1.3rem;
  font-weight: 500;
  line-height: 1.2;
}

.manual-chapter-card small {
  display: block;
  margin-top: 7px;
  color: var(--ink-soft);
  font-size: 0.68rem;
}

.manual-chapter-card nav {
  display: grid;
  gap: 3px;
  padding: 13px 0;
}

.manual-chapter-card nav a {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 12px;
  padding: 9px 10px;
  border-radius: 11px;
  color: var(--ink-soft);
  font-size: 0.78rem;
  line-height: 1.35;
}

.manual-chapter-card nav a:hover {
  color: var(--ink);
  background: color-mix(in srgb, var(--gold) 9%, transparent);
}

.manual-chapter-card nav i {
  color: var(--gold);
  font-style: normal;
}

.manual-open-chapter {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: auto;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  color: var(--gold);
  font-size: 0.74rem;
  font-weight: 850;
  letter-spacing: 0.07em;
  text-transform: uppercase;
}

.manual-logical-reader {
  display: grid;
  grid-template-columns: minmax(210px, 270px) minmax(0, 1fr);
  gap: clamp(22px, 4vw, 54px);
  align-items: start;
}

.manual-logical-toc {
  position: sticky;
  top: 92px;
  max-height: calc(100vh - 118px);
  overflow-y: auto;
  display: grid;
  gap: 3px;
  padding: 14px;
  border: 1px solid var(--line);
  border-radius: 20px;
  background: color-mix(in srgb, var(--paper) 76%, transparent);
  scrollbar-width: thin;
}

.manual-logical-toc > strong {
  padding: 8px 10px 11px;
  color: var(--gold);
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.25;
}

.manual-logical-toc a {
  padding: 8px 10px;
  border-radius: 10px;
  color: var(--ink-soft);
  font-size: 0.72rem;
  line-height: 1.3;
}

.manual-logical-toc a:hover,
.manual-logical-toc a.router-link-active,
.manual-logical-toc a.active {
  color: var(--ink);
  background: color-mix(in srgb, var(--gold) 11%, transparent);
}

.manual-back-to-contents {
  color: var(--gold) !important;
  font-weight: 850;
  letter-spacing: 0.04em;
}

.manual-logical-sheet {
  min-width: 0;
  padding: clamp(24px, 5vw, 68px);
  border: 1px solid var(--line);
  border-radius: 34px 34px 90px 34px;
  background: color-mix(in srgb, var(--paper) 94%, transparent);
  box-shadow: var(--shadow);
}

.manual-logical-reader-header {
  margin-bottom: 34px;
  padding-bottom: 27px;
  border-bottom: 1px solid var(--line);
}

.manual-logical-reader-header h1 {
  max-width: 850px;
  margin: 8px 0 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 4.5vw, 4rem);
  font-weight: 500;
  line-height: 1.03;
  letter-spacing: -0.025em;
}

.manual-logical-section {
  scroll-margin-top: 94px;
  padding: 8px 0 42px;
}

.manual-logical-section + .manual-logical-section {
  padding-top: 38px;
  border-top: 1px solid var(--line);
}

.manual-logical-section > header {
  margin-bottom: 22px;
}

.manual-logical-section > header span {
  display: block;
  margin-bottom: 7px;
  color: var(--gold);
  font-size: 0.66rem;
  font-weight: 850;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.manual-logical-section h2 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1.45rem, 3vw, 2.4rem);
  font-weight: 500;
  line-height: 1.15;
}

.manual-logical-text {
  white-space: pre-wrap;
  overflow-wrap: anywhere;
  color: var(--ink);
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(1rem, 1.2vw, 1.13rem);
  line-height: 1.76;
}

.manual-logical-pager {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
  margin-top: 16px;
  padding-top: 24px;
  border-top: 1px solid var(--line);
}

.manual-logical-pager a {
  min-height: 82px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 16px 18px;
  border: 1px solid var(--line);
  border-radius: 16px;
  background: color-mix(in srgb, var(--paper-deep) 40%, transparent);
}

.manual-logical-pager a:last-child {
  text-align: right;
}

.manual-logical-pager span {
  color: var(--gold);
  font-size: 0.64rem;
  font-weight: 850;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.manual-logical-pager strong {
  margin-top: 6px;
  font-family: Georgia, "Times New Roman", serif;
  font-weight: 500;
}

.manual-missing-chapter {
  min-height: 60vh;
  display: grid;
  place-items: center;
  align-content: center;
  gap: 18px;
  text-align: center;
}

.manual-missing-chapter h1 {
  margin: 0;
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(2rem, 5vw, 4rem);
  font-weight: 500;
}

@media (max-width: 980px) {
  .manual-chapter-grid {
    grid-template-columns: 1fr;
  }

  .manual-logical-reader {
    grid-template-columns: 1fr;
  }

  .manual-logical-toc {
    position: static;
    max-height: none;
    display: flex;
    overflow-x: auto;
  }

  .manual-logical-toc > strong {
    flex: 0 0 220px;
  }

  .manual-logical-toc a {
    flex: 0 0 190px;
  }

  .manual-back-to-contents {
    flex-basis: 145px !important;
  }
}

@media (max-width: 680px) {
  .manual-logical-heading {
    align-items: flex-start;
  }

  .manual-reading-suggestion {
    align-items: flex-start;
    flex-direction: column;
    border-radius: 22px 22px 55px 22px;
  }

  .manual-logical-sheet {
    padding: 24px 18px;
    border-radius: 22px 22px 55px 22px;
  }

  .manual-logical-pager {
    grid-template-columns: 1fr;
  }

  .manual-logical-pager a:last-child {
    text-align: left;
  }
}
