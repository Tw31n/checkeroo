node(:status) { 'OK' }

child @dishes => :dishes do
    attributes :name, :price
end