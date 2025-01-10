// Componente actualizado: Tienda
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { useFetch } from "./apiService";
import "../assets/css/tienda.css";

export const Tienda = () => {
  const {
    data: products,
    loading: loadingProducts,
    error: errorProducts,
  } = useFetch("https://web-production-4880.up.railway.app/productos/");

  const [categories, setCategories] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    status: true,
  });

  const [sortOrder, setSortOrder] = useState("destacados");

  useEffect(() => {
    if (products) {
      const uniqueCategories = [
        ...new Set(products.map((product) => product.id_categoria)),
      ];
      setCategories(uniqueCategories);
    }
  }, [products]);

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId],
    }));
  };

  const toggleFilter = (filterId, optionId) => {
    setSelectedFilters((prev) => {
      const current = prev[filterId] || [];
      const updated = current.includes(optionId)
        ? current.filter((id) => id !== optionId)
        : [...current, optionId];

      return {
        ...prev,
        [filterId]: updated,
      };
    });
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  const sortProducts = (products) => {
    switch (sortOrder) {
      case "menorPrecio":
        return [...products].sort((a, b) => a.precio - b.precio);
      case "mayorPrecio":
        return [...products].sort((a, b) => b.precio - a.precio);
      default:
        return products; // Mantener destacados como predeterminado
    }
  };

  const filteredProducts = products
    ? products.filter((product) => {
        return Object.entries(selectedFilters).every(([filterId, selected]) => {
          if (selected.length === 0) return true;

          switch (filterId) {
            case "categories":
              return selected.includes(product.id_categoria.toString());
            case "status":
              return selected.includes(product.estatus);
            default:
              return true;
          }
        });
      })
    : [];

  const sortedAndFilteredProducts = sortProducts(filteredProducts);

  const filters = [
    {
      id: "categories",
      name: "Categorías",
      options: categories.map((cat) => ({
        id: cat.toString(),
        name: `Categoría ${cat}`,
      })),
    },
    {
      id: "status",
      name: "Estatus",
      options: [
        { id: "DISPONIBLE", name: "Disponible" },
        { id: "AGOTADO", name: "Agotado" },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="productsPage">
        {/* //Carrousel */}
        <div className="breadcrumb">
          <a href="/" className="breadcrumb-link">
            Inicio
          </a>
          <span className="breadcrumb-separator">›</span>
          <span className="breadcrumb-current">Tienda</span>
        </div>

        <div className="productsHeader">
          <h1 className="productsTitle">Inodoros y asientos</h1>
          <div className="sortOptions">
            <label htmlFor="sortOrder">Ordenar por:</label>
            <select
              id="sortOrder"
              value={sortOrder}
              onChange={handleSortChange}
              className="sortDropdown"
            >
              <option value="todos">Todos</option>
              <option value="menorPrecio">Menor precio</option>
              <option value="mayorPrecio">Mayor precio</option>
            </select>
          </div>
        </div>

        <div className="productsLayout">
          <aside className="filtersSidebar">
            <h2 className="filtersTitle">Filtros</h2>
            {filters.map((filter) => (
              <div key={filter.id} className="filterSection">
                <button
                  className="filterHeader"
                  onClick={() => toggleSection(filter.id)}
                >
                  <span>{filter.name}</span>
                  <span className="arrowIcon">
                    {expandedSections[filter.id] ? "▲" : "▼"}
                  </span>
                </button>

                {expandedSections[filter.id] && (
                  <div className="filterOptions">
                    {filter.options.map((option) => (
                      <label key={option.id} className="filterOption">
                        <input
                          type="checkbox"
                          checked={(selectedFilters[filter.id] || []).includes(
                            option.id
                          )}
                          onChange={() => toggleFilter(filter.id, option.id)}
                        />
                        <span>{option.name}</span>
                      </label>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </aside>

          <main className="productsGrid">
            {loadingProducts && <div className="loading">Cargando...</div>}
            {errorProducts && <div className="error">{errorProducts}</div>}
            {sortedAndFilteredProducts.map((product) => (
              <Link
                to={`/producto/${product.id_producto}`}
                key={product.id_producto}
                className="productCard"
              >
                <div className="productImage">
                  {product.imagen_default ? (
                    <img
                      src={product.imagen_default}
                      alt={product.nombre}
                      className="productImg"
                    />
                  ) : (
                    <div className="productImagePlaceholder">
                      <span className="placeholderIcon">📷</span>
                    </div>
                  )}
                </div>
                <div className="productContent">
                  <h3>{product.nombre}</h3>
                  <p>{product.descripcion}</p>
                  <div className="productTags">
                    <span>Categoría {product.id_categoria}</span>
                    <span>{product.estatus}</span>
                  </div>
                  <div className="productPrice">S/.{product.precio}</div>
                </div>
              </Link>
            ))}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};
