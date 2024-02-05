-- CreateTable
CREATE TABLE "Prato" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "ingredientes" TEXT NOT NULL,
    "valor" REAL NOT NULL DEFAULT 0.0,
    "tempoPreparo" INTEGER NOT NULL,

    CONSTRAINT "Prato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "mesa" INTEGER NOT NULL,
    "atendimento" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PedidoToPrato" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_PedidoToPrato_AB_unique" ON "_PedidoToPrato"("A", "B");

-- CreateIndex
CREATE INDEX "_PedidoToPrato_B_index" ON "_PedidoToPrato"("B");

-- AddForeignKey
ALTER TABLE "_PedidoToPrato" ADD CONSTRAINT "_PedidoToPrato_A_fkey" FOREIGN KEY ("A") REFERENCES "Pedido"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PedidoToPrato" ADD CONSTRAINT "_PedidoToPrato_B_fkey" FOREIGN KEY ("B") REFERENCES "Prato"("id") ON DELETE CASCADE ON UPDATE CASCADE;
