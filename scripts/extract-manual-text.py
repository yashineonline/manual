#!/usr/bin/env python3
from pathlib import Path
import argparse
import re
import subprocess

parser = argparse.ArgumentParser()
parser.add_argument('pdf', type=Path)
parser.add_argument('--output', type=Path, default=Path('content/en/manual/pages'))
args = parser.parse_args()
args.output.mkdir(parents=True, exist_ok=True)

for page in range(1, 86):
    temporary = args.output / f'.{page:03d}.raw.txt'
    subprocess.run([
        'pdftotext', '-f', str(page), '-l', str(page), '-raw', '-enc', 'UTF-8',
        str(args.pdf), str(temporary)
    ], check=True)
    lines = temporary.read_text(encoding='utf-8', errors='replace').replace('\f', '').splitlines()
    while lines and not lines[0].strip(): lines.pop(0)
    while lines and not lines[-1].strip(): lines.pop()
    if lines and re.fullmatch(r'\d{1,3}', lines[0].strip()): lines.pop(0)
    if lines and re.fullmatch(r'\d{1,3}', lines[-1].strip()): lines.pop()
    text = '\n'.join(line.rstrip() for line in lines).strip() + '\n'
    (args.output / f'{page:03d}.txt').write_text(text, encoding='utf-8')
    temporary.unlink(missing_ok=True)
