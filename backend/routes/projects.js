const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  const projects = await prisma.project.findMany({
    where: { userId: req.userId },
  });
  res.json(projects);
});

router.post('/', async (req, res) => {
  const { title, description } = req.body;
  const project = await prisma.project.create({
    data: { title, description, userId: req.userId },
  });
  res.json(project);
});

module.exports = router;
